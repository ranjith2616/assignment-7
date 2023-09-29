import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import VideoItem from '../VideoItem'

import {
  VideoItemDetailsContainer,
  ResponsiveContainer,
  LoadingContainer,
  FailureImage,
} from './styledComponents'

import Header from '../Header'
import Sidebar from '../Sidebar'

const apiStatusConst = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoData: [],
    apiStatus: apiStatusConst.initial,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConst.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
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
      const updateData = {
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        channelName: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
      }

      this.setState({videoData: updateData, apiStatus: apiStatusConst.success})
    } else {
      this.setState({apiStatus: apiStatusConst.failure})
    }
  }

  onRetryButton = () => {
    this.getVideoDetails()
  }

  renderSuccessView = () => {
    const {videoData} = this.state

    return (
      <>
        <VideoItem videoDetails={videoData} />
      </>
    )
  }

  renderInProgressView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoadingContainer>
  )

  renderFailureView = () => (
    <div>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
      />
      <h1> Oops! Something Went Wrong</h1>
      <p>
        {' '}
        We are having some trouble to complete your request. Please try again.
      </p>
      <button type="button" onClick={this.onRetryButton}>
        {' '}
        Retry
      </button>
    </div>
  )

  renderVideoItemDetailRoute = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConst.success:
        return this.renderSuccessView()
      case apiStatusConst.inProgress:
        return this.renderInProgressView()
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
        <VideoItemDetailsContainer>
          <Sidebar />
          <ResponsiveContainer data-testid="videoItemDetails">
            {this.renderVideoItemDetailRoute()}
          </ResponsiveContainer>
        </VideoItemDetailsContainer>
      </>
    )
  }
}

export default VideoItemDetails
