import React, {  useState } from 'react'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavX } from '../../components/Navbar/NavbarElements'
import Servicetype from '../../components/Servicetype'
import { useHistory } from "react-router-dom";
import { app_monitoring_sol, maintain_server } from '../../components/Servicetype/Data'

const CloudSecPage = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  let history = useHistory();

  return (
    <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'  src={'/images/Main-Logo.svg'} onClick={() => history.push("/")}/>
            <MobileIcon>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks onClick={() => history.push("/")}>About</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks onClick={() => history.push("/")}>Why Us</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks onClick={() => history.push("/")}>Contact</NavLinks>
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
      <Servicetype {...app_monitoring_sol}/>
      <Servicetype {...maintain_server}/>
      <Footer />
    </>
  )
}

export default CloudSecPage