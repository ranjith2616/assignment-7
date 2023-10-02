import styled from 'styled-components'

import {SiYoutubegaming} from 'react-icons/si'

export const GameContainer = styled.div`
  display: flex;
`
export const ResponsiveContainer = styled.div`
  background-color: ${props => (props.dark === 'true' ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
  overflow: auto;
  background-size: cover;
  width: 100%;
`
export const GamingDetailedListContainer = styled.div`
  list-style-type: none;
  padding-left: 0;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40vh;
`

export const GamingBannerCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => (props.dark === 'true' ? '#181818' : '#f1f1f1')};
  height: 70px;
  padding: 10px;
`
export const BannerIcon = styled(SiYoutubegaming)`
  color: red;
  font-size: 30px;
`
export const GamingBannerHeading = styled.h1`
  padding-left: 10px;
  color: ${props => (props.dark === 'true' ? '#fff' : '#000')};
`
