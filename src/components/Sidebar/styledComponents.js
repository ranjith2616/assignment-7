import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {AiFillFire, AiFillHome} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import {RiMenuAddFill} from 'react-icons/ri'

export const SidebarContainer = styled.div`
  width: 40vh;
  height: 100vh;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: none;
  }

  background-color: ${props => (props.dark === 'true' ? '#212121' : '#f9f9f9')};
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#181818')};
`
export const RouteLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 5000;
  color: #000;

  padding-left: 20px;
  padding-top: 8px;
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#181818')};
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 20px;
`

export const HomeIcon = styled(AiFillHome)``

export const TrendIcon = styled(AiFillFire)``

export const GameIcon = styled(SiYoutubegaming)``

export const SaveIcon = styled(RiMenuAddFill)``

export const ContactUsContainer = styled.div`
  padding: 10px;
`
export const ContactUsHeading = styled.p`
  font-size: 16px;

  color: ${props => (props.dark === 'true' ? '#ffffff' : '#1e293b')};
`
export const CompanyLogoImages = styled.img`
  height: 35px;
  padding-top: 8px;
  padding-right: 8px;
`
