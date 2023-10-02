import Popup from 'reactjs-popup'

import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

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
  DarkThemeIcon,
  LightThemeIcon,
  WebsiteLogoLink,
  LogoutButtonContainer,
  ButtonPopUpContainer,
  LogoutText,
  PopupLogoutButton,
} from './styledComponents'

const Header = props => {
  const onLogOutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, toggleTheme} = value

        const onClickToggleTheme = () => {
          toggleTheme()
        }

        return (
          <HeaderContainer dark={isDark.toString()}>
            <WebsiteLogoLink to="/">
              <WebSiteLogImage
                src={
                  isDark
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </WebsiteLogoLink>

            <DesktopFeatureContainer>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onClickToggleTheme}
              >
                {isDark ? (
                  <LightThemeIcon dark={isDark.toString()} />
                ) : (
                  <DarkThemeIcon />
                )}
              </ThemeButton>

              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />

              <div>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button" dark={isDark.toString()}>
                      Logout
                    </LogoutButton>
                  }
                >
                  {close => (
                    <LogoutButtonContainer dark={isDark.toString()}>
                      <>
                        <LogoutText dark={isDark.toString()}>
                          {' '}
                          Are you sure, you want to logout
                        </LogoutText>
                      </>

                      <ButtonPopUpContainer>
                        <PopupLogoutButton
                          type="button"
                          onClick={() => close()}
                          outline
                        >
                          {' '}
                          Cancel
                        </PopupLogoutButton>
                        <PopupLogoutButton
                          type="button"
                          onClick={onLogOutButton}
                        >
                          {' '}
                          Confirm
                        </PopupLogoutButton>
                      </ButtonPopUpContainer>
                    </LogoutButtonContainer>
                  )}
                </Popup>
              </div>
            </DesktopFeatureContainer>

            <MobileFeaturesContainer>
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onClickToggleTheme}
              >
                {isDark ? (
                  <LightThemeIcon dark={isDark.toString()} />
                ) : (
                  <DarkThemeIcon />
                )}
              </ThemeButton>

              <MenuButton type="button">
                <MenuIcon dark={isDark.toString()} />
              </MenuButton>

              <div>
                <Popup
                  modal
                  trigger={
                    <LogoutButton type="button">
                      <LogOutIcon dark={isDark.toString()} />{' '}
                    </LogoutButton>
                  }
                >
                  {close => (
                    <LogoutButtonContainer dark={isDark.toString()}>
                      <>
                        <LogoutText dark={isDark.toString()}>
                          {' '}
                          Are you sure you want to logout?
                        </LogoutText>
                      </>

                      <ButtonPopUpContainer>
                        <PopupLogoutButton
                          type="button"
                          onClick={() => close()}
                          outline
                        >
                          {' '}
                          Cancel
                        </PopupLogoutButton>
                        <PopupLogoutButton
                          type="button"
                          onClick={onLogOutButton}
                        >
                          {' '}
                          Confirm
                        </PopupLogoutButton>
                      </ButtonPopUpContainer>
                    </LogoutButtonContainer>
                  )}
                </Popup>
              </div>
            </MobileFeaturesContainer>
          </HeaderContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
