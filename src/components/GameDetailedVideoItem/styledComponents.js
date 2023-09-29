import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkGamingItem = styled(Link)`
  margin: 10px;
  padding: 10px;
  width: 30vh;
  height: 40vh;
  text-decoration: none;
  color: #000;
  @media screen and (max-width: 767px) {
    width: 25vh;
  }
`
export const GameImage = styled.img`
  height: 30vh;
  width: 100%;
`
