import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'

import Login from './components/Login'

class App extends Component {
  state = {save: false, isDarkTheme: false}

  onToggleSave = () => {}

  render() {
    const {save, isDarkTheme} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          save,
          isDarkTheme,
          toggleSave: this.onToggleSave(),
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
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
