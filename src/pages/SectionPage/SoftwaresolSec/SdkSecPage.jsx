import React, {  useState,useEffect } from 'react'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Servicetype from '../../../components/Servicetype'
import { api_service, cloud_api, live_sdk, ocr_sdk, onvif_api } from '../../../components/Servicetype/Data'
import Sidebar from '../../../components/SideBar'
import Contact from '../../../components/Contact'

const SdkSecPage = () => {
  useEffect(() => {window.scrollTo(0, 0); }, []);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
               
      <Servicetype {...onvif_api}/>
      <Servicetype {...live_sdk}/>
      <Servicetype {...api_service}/>
      <Servicetype {...ocr_sdk}/>
      <Servicetype {...cloud_api}/>
      <Contact/>
      <Footer />
    </>
  )
}

export default SdkSecPage