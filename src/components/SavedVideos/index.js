import {Component} from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {SavedVideosContainer, ResponsiveContainer} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <>
        <Header />
        <SavedVideosContainer>
          <Sidebar />
          <ResponsiveContainer>
            <h1> Welcome to Saved Route</h1>
          </ResponsiveContainer>
        </SavedVideosContainer>
      </>
    )
  }
}

export default SavedVideos
