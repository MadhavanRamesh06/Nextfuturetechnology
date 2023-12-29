import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  overflow-y: scroll;
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
export const SidebarWrapper = styled.div`
  color: #fff;
`
export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media  screen and (max-width: 480px) {

  }
`
export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 02s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin: 20px 0;

  &:hover {
    color: #20b7af;
    transition: 0.1s ease-in-out;
  }
`
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
export const SidebarRoute = styled(LinkR)`
  border-radius: 50px;
  background: #20b7af;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline:  none;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.1s ease-in-out;
    background: #fff;
    color: #010606;
  }
`

export const SidebarAccordian = styled.div`
    display: flex;
    flex-direction: column;
`

export const AHeading = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.1s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  margin: 20px 0;

  &:hover {
    transition: all 0.1s ease-in-out;
    color: #20b7af;
  }
  `

  export const AccordianDiv = styled.div`
    text-align: center;
    transition: height 0.3s ease-in;
  `
export const AContent = styled.div`
    margin: 20px 0;
    cursor: pointer;

    &:hover {
    transition: all 0.1s ease-in-out;
    color: #20b7af;
    text-decoration: underline;
  }
`