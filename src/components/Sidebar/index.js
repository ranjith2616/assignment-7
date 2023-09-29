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
  ContactUsContainer,
  CompanyLogoImages,
  ContactUsHeading,
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

        <ContactUsContainer>
          <ContactUsHeading> CONTACT US</ContactUsHeading>
          <div>
            <CompanyLogoImages
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
              alt="facebook logo"
            />

            <CompanyLogoImages
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
              alt="linked in logo"
            />

            <CompanyLogoImages
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
              alt="twitter logo"
            />
          </div>

          <p> Enjoy! Now to see your channels and recommendations!</p>
        </ContactUsContainer>
      </SidebarContainer>
    )
  }
}

export default withRouter(Sidebar)
