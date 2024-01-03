import React, {  useState ,useEffect} from 'react'
import Footer from '../../../components/Footer'
import Servicetype from '../../../components/Servicetype'
import Contact from '../../../components/Contact'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/SideBar'
import { c } from '../../../components/Learn/Data'

const CSecPage = () => {
  useEffect(() => {window.scrollTo(0, 0); }, []);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
      <Servicetype {...c}/>
      <Contact/>
      <Footer />
    </>
  )
}

export default CSecPage