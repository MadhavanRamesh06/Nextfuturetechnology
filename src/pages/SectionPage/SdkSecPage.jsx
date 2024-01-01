import React, {  useState,useEffect } from 'react'
import Footer from '../../components/Footer'
import Servicetype from '../../components/Servicetype'
import { api_service, cloud_api, live_sdk, ocr_sdk, onvif_api } from '../../components/Servicetype/Data'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/SideBar'
import Contact from '../../components/Contact'

const SdkSecPage = ({data}) => {
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
      <Servicetype {...onvif_api}/>
      <Servicetype {...live_sdk}/>
      <Servicetype {...ocr_sdk}/>
      <Servicetype {...api_service}/>
      <Servicetype {...cloud_api}/>
      <Contact/>
      <Footer />
    </>
  )
}

export default SdkSecPage