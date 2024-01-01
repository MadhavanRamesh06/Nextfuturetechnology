import React, {  useState,useEffect } from 'react'
import Footer from '../../components/Footer'
import Servicetype from '../../components/Servicetype'
import { web_dev, web_dns, web_host } from '../../components/Servicetype/Data'
import Contact from '../../components/Contact'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/SideBar'

const WebSecPage = ({data}) => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

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