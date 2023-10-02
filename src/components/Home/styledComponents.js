import styled from 'styled-components'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

export const HomeContainer = styled.div`
  display: flex;
`
export const ResponsiveContainer = styled.div`
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;

  background-color: ${props => (props.dark === 'true' ? '#181818' : '#f9f9f9')};
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 30vh;
  background-size: cover;
  padding: 10px;
`
export const BannerCancelIcon = styled(AiOutlineClose)``

export const BannerTopCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`

export const WebsiteLogoImg = styled.img`
  height: 40px;
`
export const BannerCloseButton = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
`
export const SearchInputContainer = styled.div`
  border: 2px solid #c0bdbf;
  border-radius: 3px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 60vh;
  margin: 10px;
  background-color: #ffffff;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const SearchInput = styled.input`
  width: 50vh;
  height: 28px;
  border: 0;
  font-family: 'Roboto';
  background: transparent;
  outline: none;
`
export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 40px;

  width: 60px;
  padding: 10px;
`
export const SearchButton = styled.button`
  border-left: 2px solid #c0bdbf;
  border-top: 0;
  border-bottom: 0;
  border-right: 0;
  background: #c0bdbf;
  cursor: pointer;
  outline: none;
`
export const DetailedVideoContainer = styled.div`
  list-style-type: none;
  padding-left: 0;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 16px;
`
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
`
export const NoVideosImage = styled.img`
  height: 40vh;
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
