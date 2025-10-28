import React from 'react';
import Hero from "../components/Hero";
    import About from "../components/About";
   
    import Servicespage from '../components/Servicespage';
    import Projectpage from '../components/Projectpage';
    
     import ClientLogoSlider from "../components/ClientLogoSlider";


const Home = () => {
    return (
        <>
      <Hero />
      <About />
       <Projectpage />
   
      <Servicespage/>
       <ClientLogoSlider/>
     
      {/* <Contact/> */}

       
      
    </>
    );
}

export default Home;
