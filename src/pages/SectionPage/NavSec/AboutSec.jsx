import React, {  useState ,useEffect} from 'react'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Info from '../../../components/Info'
import { homeObjOne, homeObjTwo} from '../../../components/Info/Data'
import Contact from '../../../components/Contact'
import Sidebar from '../../../components/SideBar'

const AboutSecPage = () => {
  useEffect(() => {window.scrollTo(0, 0); }, []);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
   <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
      <Info {...homeObjOne}/>
      <Info {...homeObjTwo}/>
      <Contact/>
      <Footer />
    </>
  )
}

export default AboutSecPage