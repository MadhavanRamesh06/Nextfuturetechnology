import React, { useState } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarAccordian, AccordianDiv, AHeading } from './SidebarElements'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

const Sidebar = ({isOpen,toggle}) => {

  const [open, setOpen ] = useState(false);

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
          <SidebarLink to='why-us' onClick={toggle}>Why Us</SidebarLink>
          
          <SidebarAccordian>
            <AHeading onClick={() => setOpen(!open)}>  Services { open ? <RiArrowUpSLine />: <RiArrowDownSLine /> } </AHeading>
            { open ? 
            <AccordianDiv>
              <SidebarLink to='learn' onClick={toggle}>Learning Center</SidebarLink>
              <SidebarLink to='services' onClick={toggle}>Software Services</SidebarLink>
            </AccordianDiv> : null }
          </SidebarAccordian>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
