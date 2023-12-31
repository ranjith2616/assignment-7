import styled from 'styled-components'

import {Link} from 'react-router-dom'

export const LinkTrendingContainer = styled(Link)`
  display: flex;
  margin: 15px;
  padding: 10px;
  text-decoration: none;
  color: ${props => (props.dark === 'true' ? '#fff' : '#000')};
  padding: 10px;
`

export const ThumbnailImage = styled.img`
  height: 30vh;
  padding-right: 10px;
`
export const TitleHeading = styled.p`
  font-size: 20px;
  font-weight: 500;
`
