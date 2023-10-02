import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Cookies from 'js-cookie'

import VideoItem from '../VideoItem'

import NxtWatchContext from '../../context/NxtWatchContext'

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
    like: false,
    disLike: false,
    save: false,
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

  onLikeButton = () => {
    const {like} = this.state

    if (like === true) {
      this.setState({like: false})
    } else {
      this.setState({
        like: true,
        disLike: false,
      })
    }
  }

  onDisLikeButton = () => {
    const {disLike} = this.state

    if (disLike === true) {
      this.setState({disLike: false})
    } else {
      this.setState({
        like: false,
        disLike: true,
      })
    }
  }

  onSaveButton = () => {
    this.setState(prev => ({
      save: !prev.save,
    }))
  }

  renderSuccessView = () => {
    const {videoData, like, disLike, save} = this.state

    return (
      <>
        <VideoItem
          like={like}
          disLike={disLike}
          save={save}
          videoDetails={videoData}
          onLikeButton={this.onLikeButton}
          onDisLikeButton={this.onDisLikeButton}
          onSaveButton={this.onSaveButton}
        />
      </>
    )
  }

  renderInProgressView = () => (
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
          <NxtWatchContext.Consumer>
            {value => {
              const {isDark} = value
              return (
                <ResponsiveContainer
                  data-testid="videoItemDetails"
                  dark={isDark.toString()}
                >
                  {this.renderVideoItemDetailRoute()}
                </ResponsiveContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </VideoItemDetailsContainer>
      </>
    )
  }
}

export default VideoItemDetails
