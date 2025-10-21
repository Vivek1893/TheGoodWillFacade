import { createClient } from "contentful";

// Check if environment variables are set
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!spaceId || !accessToken) {
  console.error("Missing Contentful environment variables. Please set VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_ACCESS_TOKEN");
}

const client = createClient({
  space: spaceId || "demo",
  accessToken: accessToken || "demo",
});

// Fetch all projects with better error handling
export const getProjects = async () => {
  try {
    console.log("Fetching projects from Contentful...");
    const configuredContentType = import.meta.env.VITE_CONTENTFUL_PROJECT_CT || "project";
    console.log("Using content_type:", configuredContentType);

    let res;
    let discoveryMode = false;
    let discoveredTypeIds = [];
    let candidateTypeId = null;
    try {
      res = await client.getEntries({
        content_type: configuredContentType,
        order: "fields.title",
      });
    } catch (err) {
      // If the content type is wrong (unknownContentType), fall back to discovery mode
      const isUnknownCt = err?.message?.includes("unknownContentType") || err?.toString?.().includes("unknownContentType");
      if (isUnknownCt) {
        console.warn("Unknown content type:", configuredContentType, "— entering discovery mode to list available types.");
        const discovery = await client.getEntries({ limit: 100 });
        discoveredTypeIds = Array.from(new Set((discovery.items || []).map(i => i.sys?.contentType?.sys?.id).filter(Boolean)));
        console.warn("Discovered content types:", discoveredTypeIds);
        candidateTypeId = discoveredTypeIds[0] || null;
        if (candidateTypeId) {
          console.warn("Using discovered candidate content type:", candidateTypeId);
        }
        discoveryMode = true;
        res = discovery;
      } else {
        throw err;
      }
    }

    console.log("Contentful response:", res);

    if (!res.items || res.items.length === 0) {
      console.warn("No projects found in Contentful");
      return [];
    }

    // If discovery mode was used, optionally filter to likely project entries by common ids
    const likelyProjectTypeIds = [configuredContentType, candidateTypeId, "project", "projects", "Project", "Projects"].filter(Boolean);
    const items = (res.items || []).filter(it => {
      const ct = it.sys?.contentType?.sys?.id;
      if (!ct) return true; // keep if unknown
      if (discoveryMode) {
        // In discovery mode, prefer candidateTypeId if present; otherwise keep all discovered
        return candidateTypeId ? ct === candidateTypeId : true;
      }
      if (configuredContentType) return ct === configuredContentType;
      return likelyProjectTypeIds.includes(ct);
    });

    if (items.length === 0) {
      console.warn("No entries matched after filtering by content type.", { discoveryMode, configuredContentType, candidateTypeId, discoveredTypeIds });
    }

    return items.map((item, idx) => {
      const f = item.fields;
      console.groupCollapsed(`Project[${idx}] sys.id=${item.sys.id}`);
      console.log("raw fields:", f);

      // Validate required fields
      if (!f.title) console.warn("[Contentful] Missing required field: title", item);
      if (!f.gallery || !Array.isArray(f.gallery) || f.gallery.length === 0) console.warn("[Contentful] Missing required field: gallery (needs at least 1 image)", item);
      if (!f.projectstatus) console.warn("[Contentful] Missing required field: projectstatus (expected 'completed' | 'ongoing')", item);

      // Map image url (first of gallery)
      const imgUrl = f.gallery?.[0]?.fields?.file?.url ? (f.gallery[0].fields.file.url.startsWith('http') ? f.gallery[0].fields.file.url : `https:${f.gallery[0].fields.file.url}`) : "/fallback.jpg";

      // Map project location flexibly (Contentful Location type or string)
      let projectLocation = "";
      if (f.projectlocation && typeof f.projectlocation === "object" && typeof f.projectlocation.lat === "number" && typeof f.projectlocation.lon === "number") {
        projectLocation = { lat: f.projectlocation.lat, lon: f.projectlocation.lon };
      } else if (typeof f.projectlocation === "string") {
        projectLocation = f.projectlocation; // e.g., "21.17, 72.83" or an address
      }

      console.log("mapped ->", {
        id: item.sys.id,
        name: f.title,
        status: f.projectstatus,
        img: imgUrl,
        projectLocation,
      });
      
      // Debug: Log the exact projectstatus value for filtering
      console.log(`Project ${f.title} - projectstatus value:`, JSON.stringify(f.projectstatus), `(type: ${typeof f.projectstatus})`);
      
      // Flexible status mapping - handle various possible values
      let mappedStatus = "completed"; // default
      if (f.projectstatus) {
        const statusStr = String(f.projectstatus).toLowerCase().trim();
        if (statusStr === "completed" || statusStr === "done" || statusStr === "finished") {
          mappedStatus = "completed";
        } else if (statusStr === "ongoing" || statusStr === "in progress" || statusStr === "active") {
          mappedStatus = "ongoing";
        }
      }
      
      console.log(`Project ${f.title} - mapped status:`, mappedStatus);
      console.groupEnd();
      
      // Map all gallery images
      const gallery = f.gallery && Array.isArray(f.gallery) 
        ? f.gallery.map(img => 
            img.fields?.file?.url 
              ? (img.fields.file.url.startsWith('http') ? img.fields.file.url : `https:${img.fields.file.url}`)
              : null
          ).filter(Boolean)
        : [imgUrl]; // fallback to single image

      return {
        id: item.sys.id,
        name: f.title || "Untitled Project",
        img: imgUrl,
        gallery: gallery,
        path: f.slug ? `/projects/${f.slug}` : `#${item.sys.id}`,
        status: mappedStatus,
        // Additional fields from your schema
        typeOfWork: f.typeOfWork || "",
        architect: f.architect || "",
        builder: f.builder || "",
        quantity: f.quantity || "",
        subType: f.subType || "",
        projectLocation,
      };
    });
  } catch (error) {
    console.error("Error fetching projects from Contentful:", error);
    // Disable sample fallback to expose real issues during debugging
    return [];
  }
};
