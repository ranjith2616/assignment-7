import {Component} from 'react'
import {withRouter} from 'react-router-dom'

import {
  SidebarContainer,
  RouteLink,
  HomeIcon,
  TrendIcon,
  GameIcon,
  SaveIcon,
  LinkContainer,
} from './styledComponents'

class Sidebar extends Component {
  render() {
    return (
      <SidebarContainer>
        <LinkContainer>
          <RouteLink to="/">
            <HomeIcon /> Home
          </RouteLink>

          <RouteLink to="/trending">
            <TrendIcon /> Trending
          </RouteLink>

          <RouteLink to="/gaming">
            <GameIcon /> Gaming
          </RouteLink>

          <RouteLink to="/saved-videos">
            <SaveIcon /> Saved videos
          </RouteLink>
        </LinkContainer>
      </SidebarContainer>
    )
  }
}

export default withRouter(Sidebar)
