import React, { useState } from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarAccordian, AccordianDiv, AContent, AHeading } from './SidebarElements'
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
            <AHeading onClick={() => setOpen(!open)}> Software Services { open ? <RiArrowUpSLine />: <RiArrowDownSLine /> } </AHeading>
            { open ? 
            <AccordianDiv>
              <AContent> Traffic Monitoring Solution </AContent>
              <AContent> Central Monitoring Solution </AContent>
              <AContent> Accounts Software Solution </AContent>
              <AContent> School Management Services </AContent>
              <AContent> College Management Services </AContent>
              <AContent> Time Attandance Management System </AContent>
              <AContent> ERP Software</AContent>
              <AContent> Ship Management Software </AContent>
              <AContent> Crew Management Software </AContent>
              <AContent> Voyage Management System </AContent>
              <AContent> Machine Learning Development</AContent>
            </AccordianDiv> : null }
          </SidebarAccordian>

          <SidebarAccordian>
            <AHeading onClick={() => setOpen(!open)}> Private Service Solutions { open ? <RiArrowUpSLine />: <RiArrowDownSLine /> } </AHeading>
            { open ? 
              <AccordianDiv>
                    <AContent> Support Services of Information Technology </AContent>
                    <AContent> Computer Programming </AContent>
                    <AContent> Cyber Secuirty Management Solutions </AContent>
                    <AContent> Constructing and Contracting Business </AContent>
                    <AContent> Electrical installation </AContent>
                    <AContent> Access Control System </AContent>
                    <AContent> Retail Sale CCTV Survilance  </AContent>
            </AccordianDiv> : null }
          </SidebarAccordian>

          <SidebarAccordian>
            <AHeading onClick={() => setOpen(!open)}> Website services { open ? <RiArrowUpSLine />: <RiArrowDownSLine /> } </AHeading>
            { open ? 
            <AccordianDiv>
              <AContent> Website development </AContent>
              <AContent> Website hosting </AContent>
              <AContent> Website DNS services</AContent>
          </AccordianDiv> : null }
          </SidebarAccordian>

          <SidebarAccordian>
            <AHeading onClick={() => setOpen(!open)}> SDK & API Products { open ? <RiArrowUpSLine />: <RiArrowDownSLine /> } </AHeading>
            { open ? 
            <AccordianDiv>
              <AContent> Live Streaming SDK (RTSP,HTTP) </AContent>
              <AContent> Onvif Based API Services </AContent>
              <AContent> OCR Based SDK Services </AContent>
              <AContent> API Services </AContent>
              <AContent> Cloud API Services </AContent>
           </AccordianDiv> : null}
          </SidebarAccordian>

          <SidebarAccordian>
            <AHeading onClick={() => setOpen(!open)}> Cloud Services { open ? <RiArrowUpSLine />: <RiArrowDownSLine /> } </AHeading>
            { open ? 
            <AccordianDiv>
              <AContent> Application Monitoring Soloution in Web Cloud </AContent>
              <AContent> Maintain Data in Cloud Server </AContent>
            </AccordianDiv> : null}
          </SidebarAccordian>

          <SidebarAccordian>
            <AHeading onClick={() => setOpen(!open)}> Mobile Applications { open ? <RiArrowUpSLine />: <RiArrowDownSLine /> } </AHeading>
            { open ? 
            <AccordianDiv>
              <AContent> Android and IOS supported software solution </AContent>
            </AccordianDiv> : null}
          </SidebarAccordian>
            
          
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
