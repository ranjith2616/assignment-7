import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import HomeDetailedVideoItem from '../HomeDetailedVideoItem'

import {
  HomeContainer,
  ResponsiveContainer,
  BannerContainer,
  BannerCancelIcon,
  WebsiteLogoImg,
  BannerTopCard,
  BannerCloseButton,
  SearchInputContainer,
  SearchInput,
  SearchIcon,
  SearchButton,
  DetailedVideoContainer,
  LoadingContainer,
  NoVideosImage,
  NoVideosContainer,
} from './styledComponents'

const apiStatus = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Home extends Component {
  state = {showBanner: true, api: apiStatus.initial, searchInput: '', data: []}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({api: apiStatus.inProgress})

    const {searchInput} = this.state

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const token = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()

      const updatedData = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewsCount: each.view_count,
        channelName: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))

      this.setState({data: updatedData, api: apiStatus.success})
    } else {
      this.setState({api: apiStatus.failure})
    }
  }

  BannerCancelBtn = () => {
    this.setState({showBanner: false})
  }

  renderBannerSection = () => (
    <BannerContainer data-testid="banner">
      <BannerTopCard>
        <WebsiteLogoImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerCloseButton
          data-testid="close"
          type="button"
          onClick={this.BannerCancelBtn}
        >
          <BannerCancelIcon />
        </BannerCloseButton>
      </BannerTopCard>

      <p> Buy Nxt Watch Premium in the banner</p>
      <button type="button"> GET IT NOW</button>
    </BannerContainer>
  )

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchButton = () => {
    this.getVideos()
  }

  renderSuccessView = () => {
    const {data} = this.state

    const noVideos = data.length === 0

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <div>
              {noVideos ? (
                <NoVideosContainer>
                  <NoVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />

                  <h1> No Search results found</h1>
                  <p> Try different key words or remove search filter</p>

                  <button type="button" onClick={this.onRetryButton}>
                    {' '}
                    Retry
                  </button>
                </NoVideosContainer>
              ) : (
                <div>
                  <SearchInputContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      onChange={this.onSearchInput}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      type="button"
                      onClick={this.onSearchButton}
                    >
                      {' '}
                      <SearchIcon />
                    </SearchButton>
                  </SearchInputContainer>

                  <div>
                    <DetailedVideoContainer dark={isDark.toString()}>
                      {data.map(each => (
                        <HomeDetailedVideoItem
                          key={each.id}
                          videoDetails={each}
                        />
                      ))}
                    </DetailedVideoContainer>
                    <ul>
                      <li>.</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderInprogressView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <LoadingContainer data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDark ? '#ffffff' : '#101010'}
              height="50"
              width="50"
            />
          </LoadingContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  onRetryButton = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <div>
            <img
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />

            <h1> Oops! Something Went Wrong</h1>
            <p>
              We are having some trouble to complete your request. Please try
              again.
            </p>
            <button type="button" onClick={this.onRetryButton}>
              {' '}
              Retry
            </button>
          </div>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderHomeRoute = () => {
    const {api} = this.state

    switch (api) {
      case apiStatus.success:
        return this.renderSuccessView()
      case apiStatus.inProgress:
        return this.renderInprogressView()
      case apiStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {showBanner} = this.state
    return (
      <>
        <Header />
        <HomeContainer>
          <Sidebar />
          <NxtWatchContext.Consumer>
            {value => {
              const {isDark} = value

              return (
                <ResponsiveContainer
                  data-testid="home"
                  dark={isDark.toString()}
                >
                  {showBanner && this.renderBannerSection()}

                  {this.renderHomeRoute()}
                </ResponsiveContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </HomeContainer>
      </>
    )
  }
}

export default Home
