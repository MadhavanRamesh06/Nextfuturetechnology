import React, {  useState, useEffect } from 'react'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Servicetype from '../../../components/Servicetype'
import { access_control, construct_contract, cyber_security, electrical, it_support, programming, sale_cctv } from '../../../components/Servicetype/Data'
import Contact from '../../../components/Contact'
import Sidebar from '../../../components/SideBar'

const PrivateSecPage = () => {
  useEffect(() => {window.scrollTo(0, 0); }, []);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
   
      <Servicetype {...programming}/>
      <Servicetype {...it_support}/>
      <Servicetype {...construct_contract}/>
      <Servicetype {...cyber_security}/>
      <Servicetype {...access_control}/>
      <Servicetype {...electrical}/>
      <Servicetype {...sale_cctv}/>
      <Contact/>
      <Footer />
    </>
  )
}

export default PrivateSecPage