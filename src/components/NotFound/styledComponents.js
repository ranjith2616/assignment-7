import styled from 'styled-components'

export const ResponsiveContainer = styled.div`
  display: flex;
  background-color: ${props => (props.dark === 'true' ? '#181818' : '#f9f9f9')};
`

export const NotFoundImage = styled.img`
  height: 40vh;
`
export const NotFoundContainer = styled.div`
  margin-right: 50vh;
  padding-top: 15vh;
  text-align: center;

  color: ${props => (props.dark === 'true' ? '#fff' : '#000')};
`
