import styled from 'styled-components'

import {AiFillFire} from 'react-icons/ai'

export const SavedVideosContainer = styled.div`
  display: flex;
`
export const ResponsiveContainer = styled.div`
  background-color: ${props => (props.dark === 'true' ? '#0f0f0f' : '#f9f9f9')};
  height: auto;
  background-size: cover;
  width: 100%;
`
export const NoVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${props => (props.dark === 'true' ? '#fff' : '#000')};
`

export const NoVideosImage = styled.img`
  height: 50vh;
  padding-bottom: 20px;
  margin-top: 30px;
`
export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding-left: 10px;
  background-color: ${props => (props.dark === 'true' ? '#181818' : '#f1f1f1')};
  color: ${props => (props.dark === 'true' ? '#fff' : '#000')};
`

export const BannerIcon = styled(AiFillFire)`
  font-size: 30px;
  color: red;
`
