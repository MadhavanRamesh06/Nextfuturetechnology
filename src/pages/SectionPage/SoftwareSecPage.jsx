import React, {  useState } from 'react'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavX } from '../../components/Navbar/NavbarElements'
import Servicetype from '../../components/Servicetype'
import { useHistory } from 'react-router-dom'
import { acc_software, attandance_software, cctv, central_monitoring, college_management, crew_management, erp_software, ml_develpment, school_management, ship_management, traffic_monitoring, voyage_management } from '../../components/Servicetype/Data'

const SoftwareSecPage = ({data}) => {

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
      
      <Footer />
    </>
  )
}

export default SoftwareSecPage