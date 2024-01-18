import React, { useState } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarAccordian, AccordianDiv, AHeading } from './SidebarElements'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Sidebar = ({isOpen,toggle}) => {

  const [open, setOpen ] = useState(false);
  let history=useHistory()
  const hometoggle=()=>{
    toggle();
    history.push('/');
  }

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={hometoggle}>Home</SidebarLink>
          <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
          
          <SidebarAccordian>
            <AHeading onClick={() => setOpen(!open)}>  Services { open ? <RiArrowUpSLine />: <RiArrowDownSLine /> } </AHeading>
            { open ? 
            <AccordianDiv>
              <SidebarLink to='learn' onClick={hometoggle}>Learning Center</SidebarLink>
              <SidebarLink to='services' onClick={hometoggle}>Software Solutions</SidebarLink>
            </AccordianDiv> : null }
          </SidebarAccordian>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
