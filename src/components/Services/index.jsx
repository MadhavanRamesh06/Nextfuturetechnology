import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2} from './ServicesElements'
import { useHistory } from 'react-router-dom'
const Services=()=> {
  const history = useHistory();
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Software Solutions</ServicesH1>
      <ServicesWrapper>
        <ServicesCard  onClick={ ()=> history.push('/software_solution/software_service')}>
          <ServicesIcon src={'/images/ss.svg'}/>
          <ServicesH2>Software Services</ServicesH2>
        </ServicesCard> 
        <ServicesCard  onClick={ ()=> history.push('/software_solution/web_service')}>
        <ServicesIcon src={'/images/web.svg'}/>
          <ServicesH2>Website Services</ServicesH2>
        </ServicesCard>
        <ServicesCard onClick={ ()=> history.push('/software_solution/private_service')}>
          <ServicesIcon src={'/images/ps.svg'}/>
          <ServicesH2>Private Service</ServicesH2>
        </ServicesCard>
        <ServicesCard onClick={ ()=> history.push('/software_solution/sdk&api_service')}>
          <ServicesIcon src={'/images/api.svg'}/>
          <ServicesH2>SDK & API Products</ServicesH2>
        </ServicesCard>
        <ServicesCard onClick={ ()=> history.push('/software_solution/mobile_app_development')}>
          <ServicesIcon src={'/images/mob.svg'}/>
          <ServicesH2>Mobile Application</ServicesH2>
        </ServicesCard>
        <ServicesCard onClick={ ()=> history.push('/software_solution/cloud_service')}>
          <ServicesIcon src={'/images/cloud.svg'}/>
          <ServicesH2>Cloud Services</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}


export default Services