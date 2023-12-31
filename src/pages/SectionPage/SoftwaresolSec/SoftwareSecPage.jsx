import React, { useEffect,useState } from 'react'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Servicetype from '../../../components/Servicetype'
import { acc_software, attandance_software, cctv, central_monitoring, college_management, crew_management, erp_software, school_management, ship_management, traffic_monitoring, voyage_management } from '../../../components/Servicetype/Data'
import Contact from '../../../components/Contact'
import Sidebar from '../../../components/SideBar'

const SoftwareSecPage = () => {
  useEffect(() => {window.scrollTo(0, 0); }, []);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);

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
      <Contact/>
      <Footer />
    </>
  )
}

export default SoftwareSecPage