import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ResponsivePlayer,
  VideoItemContainer,
  VideoTitleHeading,
  ViewsCountCard,
  LikeIcon,
  DisLikeIcon,
  SaveIcon,
  IconContainer,
  IconButton,
  ViewsAndIconContainer,
  HorizontalLine,
  ProfileDetailsContainer,
  ChannelLogo,
  ChannelName,
} from './styledComponents'

const VideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {toggleSave} = value

      const {videoDetails} = props
      const {
        title,
        description,
        publishedAt,
        videoUrl,
        viewCount,
        channelName,
        profileImageUrl,
        subscriberCount,
      } = videoDetails

      const publishingAt = formatDistanceToNow(new Date(publishedAt))

      const onSaveBtn = () => {
        toggleSave()
      }

      return (
        <VideoItemContainer>
          <div>
            <ResponsivePlayer url={videoUrl} controls />
          </div>

          <VideoTitleHeading> {title}</VideoTitleHeading>

          <ViewsAndIconContainer>
            <ViewsCountCard>
              <p> {viewCount}</p>
              <p> {publishingAt}</p>
            </ViewsCountCard>

            <IconContainer>
              <IconButton type="button">
                <LikeIcon /> Like
              </IconButton>
              <IconButton type="button">
                {' '}
                <DisLikeIcon /> Dislike
              </IconButton>

              <IconButton type="button" onClick={onSaveBtn}>
                <SaveIcon /> Save
              </IconButton>
            </IconContainer>
          </ViewsAndIconContainer>
          <HorizontalLine />

          <ProfileDetailsContainer>
            <ChannelLogo src={profileImageUrl} alt="channel logo" />

            <div>
              <ChannelName> {channelName}</ChannelName>
              <p> {subscriberCount} subscribers</p>
              <p> {description}</p>
            </div>
          </ProfileDetailsContainer>
        </VideoItemContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default VideoItem
