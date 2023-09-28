import Header from '../Header'
import Sidebar from '../Sidebar'

import {TrendingContainer, ResponsiveContainer} from './styledComponents'

const Trending = () => (
  <>
    <Header />
    <TrendingContainer>
      <Sidebar />
      <ResponsiveContainer>
        <h1> Welcome to Trending Route</h1>
      </ResponsiveContainer>
    </TrendingContainer>
  </>
)
export default Trending
