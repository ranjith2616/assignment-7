import styled from 'styled-components'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiMenuAddLine} from 'react-icons/ri'

import ReactPlayer from 'react-player'

export const ResponsivePlayer = styled(ReactPlayer)``

export const VideoItemContainer = styled.div`
  padding: 20px;
  width: 680px;
  padding: 10px;
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#000')};
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
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

  color: ${props => (props.dark === 'true' ? '#ffffff' : '#000')};

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
export const ChannelName = styled.p`
  font-size: 20px;
  font-weight: 500;
`
export const LikeButtonText = styled.p`
  color: ${props => (props.like === 'true' ? '#2563eb ' : '#64748b')};
`
export const DisLikeButtonText = styled.p`
  color: ${props => (props.disLike === 'true' ? '#2563eb ' : '#64748b')};
`
export const SaveButtonText = styled.p`
  color: ${props => (props.save === 'true' ? '#2563eb ' : '#64748b')};
`
