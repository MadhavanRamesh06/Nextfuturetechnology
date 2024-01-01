import React, {  useState ,useEffect} from 'react'
import Footer from '../../components/Footer'
import Servicetype from '../../components/Servicetype'
import Navbar from '../../components/Navbar'
import { app_monitoring_sol, maintain_server } from '../../components/Servicetype/Data'
import Contact from '../../components/Contact'
import Sidebar from '../../components/SideBar'

const CloudSecPage = ({data}) => {
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
      <Servicetype {...app_monitoring_sol}/>
      <Servicetype {...maintain_server}/>
      <Contact/>
      <Footer />
    </>
  )
}

export default CloudSecPage