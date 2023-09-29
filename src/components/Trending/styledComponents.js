import styled from 'styled-components'
import {AiFillFire} from 'react-icons/ai'

export const TrendingContainer = styled.div`
  display: flex;
`
export const ResponsiveContainer = styled.div`
  background-color: #f9f9f9;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
`

export const TrendIcon = styled(AiFillFire)`
  color: red;
  font-size: 30px;
`
export const TrendBannerCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  height: 80px;
  padding: 16px;
`
export const TrendingHeading = styled.h1`
  font-size: 26px;
  color: #231f20;
`
export const TrendingVideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;

  display: flex;
  flex-direction: column;
`
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
`
