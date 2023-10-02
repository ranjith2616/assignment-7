import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingDetailedItem from '../TrendingDetailedItem'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  TrendingContainer,
  ResponsiveContainer,
  TrendingVideosListContainer,
  TrendIcon,
  TrendBannerCard,
  TrendingHeading,
  LoadingContainer,
} from './styledComponents'

const apiStatusConst = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConst.initial, data: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConst.inProgress})

    const url = 'https://apis.ccbp.in/videos/trending'

    const token = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      console.log(data)

      const updatedData = data.videos.map(each => ({
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewsCount: each.view_count,
        channelName: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      }))

      this.setState({apiStatus: apiStatusConst.success, data: updatedData})
    } else {
      this.setState({apiStatus: apiStatusConst.failure})
    }
  }

  renderSuccessView = () => {
    const {data} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <div>
              <TrendBannerCard data-testid="banner" dark={isDark.toString()}>
                <TrendIcon />
                <TrendingHeading dark={isDark.toString()}>
                  {' '}
                  Trending
                </TrendingHeading>
              </TrendBannerCard>
              <TrendingVideosListContainer>
                {data.map(each => (
                  <TrendingDetailedItem key={each.id} trendingDetails={each} />
                ))}
                <ul>.</ul>
                <li>.</li>
                <li>.</li>
              </TrendingVideosListContainer>
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
    this.getTrendingVideos()
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

  renderTrendingRoute = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConst.success:
        return this.renderSuccessView()
      case apiStatusConst.inProgress:
        return this.renderInprogressView()
      case apiStatusConst.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <TrendingContainer>
          <Sidebar />
          <NxtWatchContext.Consumer>
            {value => {
              const {isDark} = value

              return (
                <ResponsiveContainer
                  data-testid="trending"
                  dark={isDark.toString()}
                >
                  {this.renderTrendingRoute()}
                </ResponsiveContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </TrendingContainer>
      </>
    )
  }
}

export default Trending
