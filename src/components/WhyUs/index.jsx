import React from 'react'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const WhyUs = () => {
  return (
    <ServicesContainer id='why-us'>
      <ServicesH1>Why choose Us?</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={'/images/svg-1.svg'}/>
          <ServicesH2>Custom Made Software</ServicesH2>
          <ServicesP>We tailor make softwares based on your company's requirement.</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={'/images/svg-2.svg'}/>
          <ServicesH2>24/7 Online Suppport</ServicesH2>
          <ServicesP>We are at your disposal 7 days a week, 24 hours a day. Worry not. </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={'/images/svg-3.svg'}/>
          <ServicesH2>Experience</ServicesH2>
          <ServicesP>You have an experienced team of software developers at your disposal.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default WhyUs;
