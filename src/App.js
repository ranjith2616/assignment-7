import {Switch, Route} from 'react-router-dom'

import './App.css'

import ProtectedRoute from './components/ProtectedRoute'

import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'

import Login from './components/Login'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/trending" component={Trending} />
      <ProtectedRoute exact path="/gaming" component={Gaming} />
      <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
    </Switch>
  </>
)

export default App
