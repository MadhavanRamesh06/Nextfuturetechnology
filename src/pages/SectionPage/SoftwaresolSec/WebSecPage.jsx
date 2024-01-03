import React, {  useState,useEffect } from 'react'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Servicetype from '../../../components/Servicetype'
import { web_dev, web_dns, web_host } from '../../../components/Servicetype/Data'
import Contact from '../../../components/Contact'
import Sidebar from '../../../components/SideBar'

const WebSecPage = () => {
  useEffect(() => {window.scrollTo(0, 0); }, []);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>

      <Servicetype {...web_dev}/>
      <Servicetype {...web_host}/>
      <Servicetype {...web_dns}/>
      <Contact />
      <Footer />
    </>
  )
}

export default WebSecPage