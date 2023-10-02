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

  background-color: ${props => (props.dark === 'true' ? '#212121' : '#f9f9f9')};
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
  background: transparent;
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#4f46e5')};
  border: ${props =>
    props.dark === 'true' ? '2px solid #ffffff' : '2px solid #4f46e5'};
  cursor: pointer;
  border-radius: 5px;
  height: 26px;
  width: 10vh;
  font-weight: 600;

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
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#101010')};
`
export const MenuIcon = styled(CgMenuGridO)`
  font-size: 30px;
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#101010')};
`
export const DarkThemeIcon = styled(FaMoon)`
  font-size: 30px;
`
export const LightThemeIcon = styled(FiLoader)`
  font-size: 30px;
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#101010')};
`

export const LogoutButtonContainer = styled.div`
  height: 26vh;
  width: 50vh;

  background-color: ${props => (props.dark === 'true' ? '#101010' : '#f9f9f9')};
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#101010')};

  border-radius: 8px;
  box-shadow: ${props =>
    props.dark === 'true'
      ? '0 0 40px rgba(200, 200, 200, 0.5)'
      : '0 0 40px rgba(0,0,0,0.5)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
`

export const LogoutText = styled.p`
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#00306e')};
  font-weight: 600;
  font-size: 18px;
  padding-left: 24px;
`
export const ButtonPopUpContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 20px;
`
export const PopupLogoutButton = styled.button`
  margin-right: 10px;
  height: 34px;
  width: 80px;
  border: ${props => (props.outline ? '2px solid #c8d1db' : 'none')};
  background-color: ${props => (props.outline ? 'transparent' : '#2082f2')};
  color: ${props => (props.outline ? '#c8d1db' : '#ffffff')};
  border-radius: 3px;
  cursor: pointer;
  outline: none;
`
