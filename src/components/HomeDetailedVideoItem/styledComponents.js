import styled from 'styled-components'

import {Link} from 'react-router-dom'

import {BsDot} from 'react-icons/bs'

export const LinkDetailedVideo = styled(Link)`
  text-decoration:none;
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#101010')};
  margin: 16px;
  border-radius: 8px;
  height: 40vh;
  padding: 8px;
  width: 46vh;
  font-family: 'Roboto';

  display:flex;
  flex-direction:column;
  justify-content:center:
  align-items: center;
`
export const ThumbnailImage = styled.img`
  height: 24vh;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
`

export const ChanelLogo = styled.img`
  height: 50px;
  padding: 10px;
`
export const VideoHeading = styled.p`
  font-size: 14px;
  font-weight: 500;
`
export const ViewsCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25vh;
`
export const DotIcon = styled(BsDot)``
