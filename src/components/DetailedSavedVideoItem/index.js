import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LinkTrendingContainer,
  ThumbnailImage,
  TitleHeading,
} from './styledComponents'

const DetailedSavedVideoItem = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value

      const {savedVideo} = props
      const {
        id,
        publishedAt,
        thumbnailUrl,
        title,
        viewsCount,
        channelName,
      } = savedVideo

      const published = formatDistanceToNow(new Date(publishedAt))

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

export default DetailedSavedVideoItem
