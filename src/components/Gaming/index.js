import {Component} from 'react'

import Header from '../Header'
import Sidebar from '../Sidebar'

import {GameContainer, ResponsiveContainer} from './styledComponents'

class Gaming extends Component {
  render() {
    return (
      <>
        <Header />
        <GameContainer>
          <Sidebar />
          <ResponsiveContainer>
            <h1> Welcome to Game Route</h1>
          </ResponsiveContainer>
        </GameContainer>
      </>
    )
  }
}

export default Gaming
