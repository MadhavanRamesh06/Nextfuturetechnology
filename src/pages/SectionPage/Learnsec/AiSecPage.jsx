import React, {  useState ,useEffect} from 'react'
import Footer from '../../../components/Footer'
import Servicetype from '../../../components/Servicetype'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavX} from '../../../components/Navbar/NavbarElements'
import Contact from '../../../components/Contact'
import Sidebar from '../../../components/SideBar'
import { ai } from '../../../components/Learn/Data'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const AiSecPage = () => {
  useEffect(() => {window.scrollTo(0, 0); }, []);
  
  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  let history = useHistory();
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <IconContext.Provider value={{ color: '#fff'}}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/'  src={'/images/Main-Logo.svg'} onClick={() => history.push("/")}/>
            <MobileIcon>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks onClick={() => history.push("/about")}>About</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks onClick={() => history.push("/whyus")}>Why Us</NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks to='contact'>Contact</NavLinks>
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
      <Servicetype {...ai}/>
      <Contact/>
      <Footer />
    </>
  )
}

export default AiSecPage