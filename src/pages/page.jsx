import React, {  useState } from 'react'
import Footer from '../components/Footer'
import { FaBars } from 'react-icons/fa'
import Section from '../components/Section'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, Navspan } from '../components/Navbar/NavbarElements'
import Services from '../components/Services/index';

import { useHistory } from "react-router-dom";

const SectionPage = ({ data }) => {

  const [show, setShow] = useState(false);
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

              <NavItem>
                <NavLinks onClick={() => setShow(!show)}>Services</NavLinks>
                <Navspan> { show ? <Services /> : null } </Navspan>
              </NavItem>

            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>

      <Section data={data} />
      <Footer />
    </>
  )
}

export default SectionPage
