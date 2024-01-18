import React, {  useState ,useEffect} from 'react'
import Footer from '../../../components/Footer'
import Servicetype from '../../../components/Servicetype'
import Contact from '../../../components/Contact'
import Sidebar from '../../../components/SideBar'
import { python } from '../../../components/Learn/Data'
import { animateScroll as scroll } from 'react-scroll'
import { useHistory } from "react-router-dom";
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavX } from '../../../components/Navbar/NavbarElements'

const PythonSecPage = () => {
  useEffect(() => {window.scrollTo(0, 0); }, []);
  const [scrollNav, setScrollNav] = useState(false);
  const toggle = () =>{
    setIsOpen(!isOpen);
  }
  let history = useHistory();
  const toggledrop= () =>{
    history.push("/");
    setIsOpen(!isOpen);
    
  }

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  const hometoggle=()=>{
    toggleHome();
    history.push("/");
  }
  const [isOpen, setIsOpen] = useState(false);
  const [isopen,setisopen]= useState(false);
  return (
    <>
   <Sidebar isOpen={isOpen} toggle={toggle}/>
     <IconContext.Provider value={{ color: '#fff'}}>
          <Nav scrollNav={scrollNav} >
        <NavbarContainer>
          <NavLogo to='/'  src={'/images/Main-Logo.svg'} onClick={hometoggle}/>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={hometoggle}
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Home</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks onClick={() => setisopen(!isopen)} smooth={true} duration={500} spy={true} exact='true' offset={-80}>  Services</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Us</NavLinks>
            </NavItem>
            </NavMenu>
            {isopen ? 
            (<NavX>
              <NavLinks onClick={toggledrop} to='learn' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Learning Center{ isopen ? toggle:null }</NavLinks>
              <NavLinks onClick={toggledrop} to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Software Solution{ isopen ? toggle:null }</NavLinks>
            </NavX>)
    :null}
        </NavbarContainer>
       
      </Nav>
      </IconContext.Provider>
      <Servicetype {...python}/>
      <Contact/>
      <Footer />
    </>
  )
}

export default PythonSecPage