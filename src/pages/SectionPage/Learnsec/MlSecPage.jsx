import React, {  useState ,useEffect} from 'react'
import Footer from '../../../components/Footer'
import Contact from '../../../components/Contact'
import Navbar from '../../../components/Navbar'
import ServiceType from '../../../components/Servicetype'
import Sidebar from '../../../components/SideBar'
import { ml } from '../../../components/Learn/Data'
const  MlSecPage= () => {
  useEffect(() => {window.scrollTo(0, 0); }, []);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
      <ServiceType{...ml}/>
      <Contact/>
      <Footer />
    </>
  )
}

export default MlSecPage