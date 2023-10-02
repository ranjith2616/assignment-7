import NxtWatchContext from '../../context/NxtWatchContext'

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

const Sidebar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDark} = value
      return (
        <SidebarContainer dark={isDark.toString()}>
          <LinkContainer>
            <RouteLink to="/" dark={isDark.toString()}>
              <HomeIcon /> Home
            </RouteLink>

            <RouteLink to="/trending" dark={isDark.toString()}>
              <TrendIcon /> Trending
            </RouteLink>

            <RouteLink to="/gaming" dark={isDark.toString()}>
              <GameIcon /> Gaming
            </RouteLink>

            <RouteLink to="/saved-videos" dark={isDark.toString()}>
              <SaveIcon /> Saved videos
            </RouteLink>
          </LinkContainer>

          <ContactUsContainer>
            <ContactUsHeading dark={isDark.toString()}>
              {' '}
              CONTACT US
            </ContactUsHeading>
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
    }}
  </NxtWatchContext.Consumer>
)

export default Sidebar
