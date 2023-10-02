import {LinkGamingItem, GameImage} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const GameDetailedVideoItem = props => {
  const {videosDetails} = props
  const {title, thumbnailUrl, id, viewsCount} = videosDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <LinkGamingItem to={`/videos/${id}`} dark={isDark.toString()}>
            <li>
              <GameImage src={thumbnailUrl} alt="video thumbnail" />
              <p> {title}</p>
              <p> {viewsCount} Watching Worldwide</p>
            </li>
          </LinkGamingItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GameDetailedVideoItem
