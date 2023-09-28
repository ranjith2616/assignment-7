import styled from 'styled-components'

import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'

export const HomeContainer = styled.div`
  display: flex;
`
export const ResponsiveContainer = styled.div`
  background-color: #f1f5f9;
  height: auto;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  max-height: auto;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 30vh;
  background-size: cover;
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
  border-radius: 5px;
  padding: 2px;
  display: flex;
  align-items: center;

  width: 40vh;
  margin: 10px;
`
export const SearchInput = styled.input`
  width: 30vh;
  height: 30px;
  margin-right: 20px;
  border: 0;
  outline: none;
`
export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 30px;
`
export const SearchButton = styled.button`
  border: 0;
  background: transparent;
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
  margin-top: 50vh;
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
