import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, 
  SocialMedia, SocialMediaWrap, WebsiteRights, FooterLinkS, FooterLinkA } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  const history = useHistory();

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Company </FooterLinkTitle>
                <FooterLinkS to='about'  onClick={() => history.push("/")} smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Us</FooterLinkS>
                <FooterLinkS to='discover'  onClick={() => history.push("/")} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</FooterLinkS>
                <FooterLinkS to='why-us'  onClick={() => history.push("/")} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Why Us</FooterLinkS>
                <FooterLinkS to='contact'  onClick={() => history.push("/")} smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</FooterLinkS>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Services </FooterLinkTitle>
                <FooterLink to='/software_solution/software_service'>Software Services</FooterLink>
                <FooterLink to='/software_solution/web_service'>Website Services</FooterLink>
                <FooterLink to='/software_solution/private_service'> Private Service </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
            <FooterLinkTitle>  </FooterLinkTitle>
            <FooterLinkTitle>  </FooterLinkTitle>
            <FooterLink to='/software_solution/sdk&api_service'> SDK & API Products </FooterLink>
            <FooterLink to='/software_solution/mobile_app_development'>Mobile Application</FooterLink>
            <FooterLink to='/software_solution/cloud_service'>Cloud services</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLinkA href='https://www.instagram.com/nextfuturetechnology/' target='_blank' arial-label='Instagram'>Instagram</FooterLinkA>
                <FooterLinkA href='https://www.facebook.com/' target='_blank' arial-label='Facebook'>Facebook</FooterLinkA>
                <FooterLinkA href='https://www.youtube.com/' target='_blank' arial-label='Youtube'>Youtube</FooterLinkA>
                <FooterLinkA href='https://www.twitter.com/' target='_blank' arial-label='Twitter'>Twitter</FooterLinkA>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              NXT
            </SocialLogo>
            <WebsiteRights>Next Future Technologies © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/nextfuturetechnology/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='https://www.youtube.com/' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='https://www.twitter.com/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='https://www.linkedin.com/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
