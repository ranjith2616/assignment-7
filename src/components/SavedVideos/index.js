import {Component} from 'react'

import Loader from 'react-loader-spinner'

import NxtWatchContext from '../../context/NxtWatchContext'

import Header from '../Header'
import Sidebar from '../Sidebar'
import DetailedSavedVideoItem from '../DetailedSavedVideoItem'

import {
  SavedVideosContainer,
  ResponsiveContainer,
  NoVideoContainer,
  NoVideosImage,
  BannerIcon,
  BannerContainer,
} from './styledComponents'

class SavedVideos extends Component {
  renderSavedVideo = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark, savedVideos} = value

        return (
          <div>
            <BannerContainer data-testid="banner" dark={isDark.toString()}>
              <BannerIcon />
              <h1> Saved Videos</h1>
            </BannerContainer>

            <ul>
              {savedVideos.map(each => (
                <DetailedSavedVideoItem key={each.id} savedVideo={each} />
              ))}
            </ul>
            <ul>.</ul>

            <li>.</li>
            <li>.</li>
          </div>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailure = () => (
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

  renderInprogress = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <div data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDark ? '#ffffff' : '#101010'}
              height="50"
              width="50"
            />
          </div>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderNoVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <NoVideoContainer dark={isDark.toString()}>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <h1> No saved videos found</h1>
            <p> You can save your videos while watching them</p>
          </NoVideoContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDark, savedVideos} = value

          const showVideos = savedVideos.length

          return (
            <>
              <Header />
              <SavedVideosContainer>
                <Sidebar />
                <ResponsiveContainer
                  data-testid="savedVideos"
                  dark={isDark.toString()}
                >
                  {showVideos > 0
                    ? this.renderSavedVideo()
                    : this.renderNoVideos()}
                </ResponsiveContainer>
              </SavedVideosContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
