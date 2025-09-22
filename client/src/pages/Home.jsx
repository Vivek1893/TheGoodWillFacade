import React from 'react';
import Hero from "../components/Hero";
    import About from "../components/About";
   
    import Servicespage from '../components/Servicespage';
    import Projectpage from '../components/Projectpage';
     import Contact from "../components/Contact";


const Home = () => {
    return (
        <>
      <Hero />
      <About />
       <Projectpage />
      <Servicespage/>
     
      <Contact/>

       
      
    </>
    );
}

export default Home;
