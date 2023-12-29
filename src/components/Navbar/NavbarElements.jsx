import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: black;
  height: 80px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top:0;
  z-index:10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`
export const NavLogo = styled.img `
  color:#fff;
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 3.5rem;
  margin: 25px 0;

  @media screen and (max-width: 768px) {
    height: 2.5rem;
  }

`
export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`
export const NavMenu = styled.ul`
  display:flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;
  position: relative;
`
export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;

  text-decoration: none;
  padding: 0.5rem;
  height: 100%;
  cursor: pointer;
  position: relative;
  &.active {
    border-bottom: 3px solid #20b7af;
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #20b7af;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`
export const NavDrop=styled.a`
color:#fff; 
display:flex;
flex-direction:column;
align-items: center;
text-decoration: none;
padding: 0 1rem;
margin: 10px 0;
cursor: pointer;
position: relative;
&.active {
  border-bottom: 3px solid #20b7af;
}
`
export const Navspan = styled.div`
  position: absolute;
  right: 850px;
`

export const NavX = styled.div`
  position: absolute;
  top: 50px;
  background-color:black;
  margin:10px;
  padding:5px;
  right: 50px;
`

export const NavSpace = styled.div`
  margin: 10px 0;
`


