import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavX } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'
import { useHistory } from "react-router-dom";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  let history = useHistory();

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


  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/'  src={'/images/Main-Logo.svg'} onClick={toggleHome}/>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={() => history.push("/")} to='about'  
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='why-us'  onClick={() => history.push("/")}
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Why Us</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to='contact'  onClick={() => history.push("/")}
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Contact</NavLinks>
            </NavItem>

            <NavItem className='dropdown'>
              <NavLinks onClick={toggleDropdown} className='dropdown-button' 
                smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks>
              </NavItem>
            </NavMenu>
            {isOpen && (
            <NavX>
              <NavLinks onClick={() => history.push("/")} to='learn'smooth={true} duration={500} spy={true} exact='true' offset={-80}>Learning Center</NavLinks>
              <NavLinks onClick={() => history.push("/")} to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Software Solution</NavLinks>
            </NavX>
    )}
        
          
        </NavbarContainer>
       
      </Nav>
      
    </IconContext.Provider>
    
    </>
    

  )
  

}


export default Navbar;
