import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import Sidebar from '../Sidebar'
import GameDetailedVideoItem from '../GameDetailedVideoItem'

import {
  GameContainer,
  ResponsiveContainer,
  GamingDetailedListContainer,
  LoadingContainer,
  BannerIcon,
  GamingBannerHeading,
  GamingBannerCard,
} from './styledComponents'

const apiStatusConst = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}
class Gaming extends Component {
  state = {data: [], apiStatus: apiStatusConst.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConst.inProgress})

    const token = Cookies.get('jwt_token')

    const url = 'https://apis.ccbp.in/videos/gaming'

    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewsCount: each.view_count,
      }))

      this.setState({data: updatedData, apiStatus: apiStatusConst.success})
    } else {
      this.setState({apiStatus: apiStatusConst.failure})
    }
  }

  renderSuccessView = () => {
    const {data} = this.state

    return (
      <div>
        <GamingBannerCard data-testid="gaming">
          <BannerIcon />
          <GamingBannerHeading> Gaming</GamingBannerHeading>
        </GamingBannerCard>

        <GamingDetailedListContainer>
          {data.map(each => (
            <GameDetailedVideoItem key={each.id} videosDetails={each} />
          ))}
        </GamingDetailedListContainer>
      </div>
    )
  }

  onRetryButton = () => {
    this.getGamingVideos()
  }

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />

      <h1> Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request. Please try again.
      </p>
      <button type="button" onClick={this.onRetryButton}>
        {' '}
        Retry
      </button>
    </div>
  )

  renderInProgress = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoadingContainer>
  )

  renderGamingRoute = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConst.success:
        return this.renderSuccessView()
      case apiStatusConst.inProgress:
        return this.renderInProgress()
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
        <GameContainer>
          <Sidebar />
          <ResponsiveContainer data-testid="gaming">
            {this.renderGamingRoute()}
          </ResponsiveContainer>
        </GameContainer>
      </>
    )
  }
}

export default Gaming
