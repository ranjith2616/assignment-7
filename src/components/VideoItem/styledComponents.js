import styled from 'styled-components'

import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiMenuAddLine} from 'react-icons/ri'

export const ResponsivePlayer = styled(ReactPlayer)``

export const VideoItemContainer = styled.div`
  padding: 20px;
  width: 680px;
  padding: 10px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const VideoTitleHeading = styled.h1`
  font-size: 18px;
  font-weight: 600;
  padding-top: 8px;
`
export const ViewsCountCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 18vh;
`
export const LikeIcon = styled(AiOutlineLike)`
  font-size: 20px;
`

export const DisLikeIcon = styled(AiOutlineDislike)`
  font-size: 20px;
`

export const SaveIcon = styled(RiMenuAddLine)`
  font-size: 16px;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`
export const IconButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  outline: none;
  font-size: 16px;

  background-color: ${props => (props.save ? 'red' : null)}

  display: flex;
  align-items: center;
`
export const ViewsAndIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const HorizontalLine = styled.hr`
  border: 1px solid #000;
`

export const ProfileDetailsContainer = styled.div`
  margin-top: 20px;
  padding: 10px;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`
export const ChannelLogo = styled.img`
  height: 30px;
`
export const ChannelName = styled.h1`
  font-size: 20px;
  font-weight: 500;
`
