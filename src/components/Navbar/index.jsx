import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavX } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'
import { useHistory } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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



  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
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
            <NavLinks to='about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
            <NavLinks onClick={() => setIsOpen(!isOpen)} smooth={true} duration={500} spy={true} exact='true' offset={-80}>  Services</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact Us</NavLinks>
            </NavItem>
            </NavMenu>
            {isOpen ? 
            (<NavX>
              <NavLinks onClick={toggledrop} to='learn' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Learning Center{ isOpen ? toggle:null }</NavLinks>
              <NavLinks onClick={toggledrop} to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Software Solution{ isOpen ? toggle:null }</NavLinks>
            </NavX>)
    :null}
        
          
        </NavbarContainer>
       
      </Nav>
      
    </IconContext.Provider>
    
    </>
    

  )
  

}


export default Navbar;
