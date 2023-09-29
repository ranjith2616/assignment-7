import {LinkGamingItem, GameImage} from './styledComponents'

const GameDetailedVideoItem = props => {
  const {videosDetails} = props
  const {title, thumbnailUrl, id, viewsCount} = videosDetails

  return (
    <LinkGamingItem to={`/videos/${id}`}>
      <li>
        <GameImage src={thumbnailUrl} alt="video thumbnail" />
        <p> {title}</p>
        <p> {viewsCount} Watching Worldwide</p>
      </li>
    </LinkGamingItem>
  )
}

export default GameDetailedVideoItem
