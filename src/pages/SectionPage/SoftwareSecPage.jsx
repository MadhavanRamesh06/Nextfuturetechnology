import React, { useEffect,useState } from 'react'
import Footer from '../../components/Footer'
import Servicetype from '../../components/Servicetype'
import { acc_software, attandance_software, cctv, central_monitoring, college_management, crew_management, erp_software, ml_develpment, school_management, ship_management, traffic_monitoring, voyage_management } from '../../components/Servicetype/Data'
import Navbar from '../../components/Navbar'
import Contact from '../../components/Contact'
import Sidebar from '../../components/SideBar'

const SoftwareSecPage = () => {
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
      <Servicetype {...cctv}/>
      <Servicetype {...traffic_monitoring}/>
      <Servicetype {...central_monitoring}/>
      <Servicetype {...acc_software}/>
      <Servicetype {...school_management}/>
      <Servicetype {...college_management}/>
      <Servicetype {...attandance_software}/>
      <Servicetype {...erp_software}/>
      <Servicetype {...ship_management}/>
      <Servicetype {...crew_management}/>
      <Servicetype {...voyage_management}/>
      <Servicetype {...ml_develpment}/>
      <Contact/>
      <Footer />
    </>
  )
}

export default SoftwareSecPage