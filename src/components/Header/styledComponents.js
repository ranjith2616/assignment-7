import {Link} from 'react-router-dom'

import {FiLogOut, FiLoader} from 'react-icons/fi'

import {CgMenuGridO} from 'react-icons/cg'

import {FaMoon} from 'react-icons/fa'

import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 12vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: 'Roboto';
`
export const WebSiteLogImage = styled.img`
  height: 30px;
  padding-left: 20px;
`

export const WebsiteLogoLink = styled(Link)``

export const ThemeButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
`
export const ThemeImage = styled.img`
  height: 26px;
`
export const ProfileImage = styled.img`
  height: 26px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutButton = styled.button`
  border: 2px solid #4f46e5;
  background: transparent;
  color: #4f46e5;
  cursor: pointer;
  border-radius: 5px;
  height: 26px;
  width: 10vh;

  @media screen and (max-width: 767px) {
    color: #000;
    border: 0;
    height: 30px;
  }
`
export const DesktopFeatureContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30vh;
  padding: 10px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const MenuButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuImage = styled.img`
  height: 26px;
`
export const MobileFeaturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 26vh;
  padding: 10px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const LogOutIcon = styled(FiLogOut)`
  font-size: 30px;
`
export const MenuIcon = styled(CgMenuGridO)`
  font-size: 30px;
`
export const ThemeIcon = styled(FaMoon)`
  font-size: 30px;
`
