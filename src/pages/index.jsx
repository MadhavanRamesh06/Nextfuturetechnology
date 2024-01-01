import React, {useState,useEffect} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Info from '../components/Info'
import { homeObjOne, homeObjTwo} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import WhyUs from './../components/WhyUs';
import Contact from './../components/Contact/index';
import Services from '../components/Services';
import Learn from '../components/Learn';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <WhyUs />
      <Learn />
      <Services/>
      <Contact />
      <Footer />
    </>
  )
}

export default Home
