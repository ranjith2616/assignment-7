import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import Login from './components/Login'
import NotFound from './components/NotFound'

class App extends Component {
  state = {isDark: false, savedVideos: []}

  onToggleSave = video => {
    const {savedVideos} = this.state

    const findVideo = savedVideos.find(each => each.id === video.id)

    if (findVideo === undefined) {
      this.setState(prev => ({
        savedVideos: [...prev.savedVideos, video],
      }))
    } else if (findVideo !== undefined) {
      const filter = savedVideos.filter(each => each.id !== video.id)

      this.setState({
        savedVideos: filter,
      })
    }
  }

  toggleTheme = () => {
    this.setState(prev => ({
      isDark: !prev.isDark,
    }))
  }

  render() {
    const {isDark, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDark,
          savedVideos,
          toggleTheme: this.toggleTheme,
          toggleSave: this.onToggleSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
