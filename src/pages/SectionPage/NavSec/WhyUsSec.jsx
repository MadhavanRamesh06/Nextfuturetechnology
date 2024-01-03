import React, {  useState ,useEffect} from 'react'
import Footer from '../../../components/Footer'
import Navbar from '../../../components/Navbar'
import Contact from '../../../components/Contact'
import WhyUs from '../../../components/WhyUs'
import Sidebar from '../../../components/SideBar'

const WhyUsSecPage = () => {
  useEffect(() => {window.scrollTo(0, 0); }, []);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
      <WhyUs/>
      <Contact/>
      <Footer />
    </>
  )
}

export default WhyUsSecPage