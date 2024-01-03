import React, {  useState ,useEffect} from 'react'
import Footer from '../../../components/Footer'
import Servicetype from '../../../components/Servicetype'
import Contact from '../../../components/Contact'
import Sidebar from '../../../components/SideBar'
import { ai } from '../../../components/Learn/Data'
import Navbar from '../../../components/Navbar'


const AiSecPage = () => {
  useEffect(() => {window.scrollTo(0, 0); }, []);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
      <Servicetype {...ai}/>
      <Contact/>
      <Footer />
    </>
  )
}

export default AiSecPage