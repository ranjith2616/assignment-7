import {formatDistanceToNow} from 'date-fns'

import {
  LinkDetailedVideo,
  ThumbnailImage,
  ChanelLogo,
  VideoHeading,
  VideoDetailsContainer,
  ViewsCard,
  DotIcon,
} from './styledComponents'

const HomeDetailedVideoItem = props => {
  const {videoDetails} = props
  const {
    id,
    title,
    publishedAt,
    thumbnailUrl,
    viewsCount,
    channelName,
    profileImageUrl,
  } = videoDetails

  const published = formatDistanceToNow(new Date(publishedAt))

  return (
    <LinkDetailedVideo to={`/videos/${id}`}>
      <li>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoDetailsContainer>
          <ChanelLogo src={profileImageUrl} alt="channel logo" />

          <div>
            <VideoHeading> {title}</VideoHeading>
            <p> {channelName}</p>

            <ViewsCard>
              <p> {viewsCount}</p>
              <p>
                {' '}
                <DotIcon />
                {published}
              </p>
            </ViewsCard>
          </div>
        </VideoDetailsContainer>
      </li>
    </LinkDetailedVideo>
  )
}

export default HomeDetailedVideoItem
