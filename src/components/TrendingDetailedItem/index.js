import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

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
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <LinkTrendingContainer to={`/videos/${id}`} dark={isDark.toString()}>
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
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingDetailedItem
