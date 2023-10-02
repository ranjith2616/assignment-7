import {
  NotFoundImage,
  ResponsiveContainer,
  NotFoundContainer,
} from './styledComponents'

import Header from '../Header'
import Sidebar from '../Sidebar'

import NxtWatchContext from '../../context/NxtWatchContext'

const NotFound = () => (
  <NxtWatchContext>
    {value => {
      const {isDark} = value

      return (
        <>
          <Header />
          <ResponsiveContainer dark={isDark.toString()}>
            <Sidebar />

            <NotFoundContainer dark={isDark.toString()}>
              <NotFoundImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
              <h1> Page Not Found</h1>
              <p> We are sorry, the page you requested could not be found.</p>
            </NotFoundContainer>
          </ResponsiveContainer>
        </>
      )
    }}
  </NxtWatchContext>
)

export default NotFound
