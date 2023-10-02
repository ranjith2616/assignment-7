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
  LikeButtonText,
  DisLikeButtonText,
  SaveButtonText,
} from './styledComponents'

const VideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark, toggleSave} = value

      const {
        videoDetails,
        like,
        disLike,
        save,
        onSaveButton,
        onLikeButton,
        onDisLikeButton,
      } = props
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

      const onLikeBtn = () => {
        onLikeButton()
      }

      const onDisLikeBtn = () => {
        onDisLikeButton()
      }

      const onSaveBtn = () => {
        onSaveButton()
        toggleSave(videoDetails)
      }

      return (
        <VideoItemContainer dark={isDark.toString()}>
          <div>
            <ResponsivePlayer
              url={videoUrl}
              height="50vh"
              width="100%"
              controls
            />
          </div>

          <VideoTitleHeading> {title}</VideoTitleHeading>

          <ViewsAndIconContainer>
            <ViewsCountCard>
              <p> {viewCount}</p>
              <p> {publishingAt}</p>
            </ViewsCountCard>

            <IconContainer>
              <IconButton
                type="button"
                dark={isDark.toString()}
                onClick={onLikeBtn}
              >
                <LikeButtonText like={like.toString()}>
                  {' '}
                  <LikeIcon /> Like
                </LikeButtonText>
              </IconButton>
              <IconButton
                type="button"
                dark={isDark.toString()}
                onClick={onDisLikeBtn}
              >
                {' '}
                <DisLikeButtonText disLike={disLike.toString()}>
                  {' '}
                  <DisLikeIcon /> Dislike
                </DisLikeButtonText>
              </IconButton>

              <IconButton
                type="button"
                dark={isDark.toString()}
                onClick={onSaveBtn}
              >
                <SaveButtonText save={save.toString()}>
                  <SaveIcon /> {save ? 'Saved' : 'Save'}
                </SaveButtonText>
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
