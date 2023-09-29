import {formatDistanceToNow} from 'date-fns'

import {
  LinkTrendingContainer,
  ThumbnailImage,
  TitleHeading,
} from './styledComponents'

const TrendingDetailedItem = props => {
  const {trendingDetails} = props
  const {
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewsCount,
    channelName,
  } = trendingDetails

  const published = formatDistanceToNow(new Date(publishedAt))

  return (
    <LinkTrendingContainer to={`/videos/${id}`}>
      <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />

      <div>
        <TitleHeading> {title}</TitleHeading>
        <p> {channelName}</p>
        <div>
          <p> {viewsCount}</p>
          <p> {published}</p>
        </div>
      </div>
    </LinkTrendingContainer>
  )
}

export default TrendingDetailedItem
