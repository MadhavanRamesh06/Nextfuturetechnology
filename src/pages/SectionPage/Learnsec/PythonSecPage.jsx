import React, {  useState ,useEffect} from 'react'
import Footer from '../../../components/Footer'
import Servicetype from '../../../components/Servicetype'
import Navbar from '../../../components/Navbar'
import Contact from '../../../components/Contact'
import Sidebar from '../../../components/SideBar'
import { python } from '../../../components/Learn/Data'

const PythonSecPage = () => {
  useEffect(() => {window.scrollTo(0, 0); }, []);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
      <Servicetype {...python}/>
      <Contact/>
      <Footer />
    </>
  )
}

export default PythonSecPage