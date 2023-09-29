import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {AiFillFire, AiFillHome} from 'react-icons/ai'

import {SiYoutubegaming} from 'react-icons/si'

import {RiMenuAddFill} from 'react-icons/ri'

export const SidebarContainer = styled.div`
  width: 40vh;
  height: 88vh;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const RouteLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 5000;
  color: #000;

  padding-left: 20px;
  padding-top: 8px;

  background-color: ${props => (props.home ? 'red' : null)};
  background-color: ${props => (props.trending ? 'red' : null)};
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
export const ContactUsHeading = styled.h1`
  font-size: 16px;
  color: #1e293b;
`
export const CompanyLogoImages = styled.img`
  height: 35px;
  padding-top: 8px;
  padding-right: 8px;
`
