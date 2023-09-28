import {Component} from 'react'

import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import {
  HeaderContainer,
  WebSiteLogImage,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  DesktopFeatureContainer,
  MenuButton,
  MobileFeaturesContainer,
  LogOutIcon,
  MenuIcon,
  ThemeIcon,
  WebsiteLogoLink,
} from './styledComponents'

class Header extends Component {
  onLogOutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  render() {
    return (
      <>
        <HeaderContainer>
          <WebsiteLogoLink to="/">
            <WebSiteLogImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </WebsiteLogoLink>

          <DesktopFeatureContainer>
            <ThemeButton type="button" data-testid="theme">
              <ThemeIcon />
            </ThemeButton>

            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />

            <LogoutButton type="button" onClick={this.onLogOutButton}>
              {' '}
              Logout
            </LogoutButton>
          </DesktopFeatureContainer>

          <MobileFeaturesContainer>
            <ThemeButton type="button" data-testid="theme">
              <ThemeIcon />
            </ThemeButton>

            <MenuButton type="button">
              <MenuIcon />
            </MenuButton>

            <LogoutButton type="button" onClick={this.onLogOutButton}>
              {' '}
              <LogOutIcon />
            </LogoutButton>
          </MobileFeaturesContainer>
        </HeaderContainer>
      </>
    )
  }
}
export default withRouter(Header)
