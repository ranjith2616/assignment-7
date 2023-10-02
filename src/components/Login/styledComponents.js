import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: ${props => (props.dark === 'true' ? '#101010' : '#f9f9f9')};
  color: ${props => (props.dark === 'true' ? '#ffffff' : '#101010')};
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 50vh;
  height: 45vh;
  margin-top: 30vh;
  box-shadow: ${props =>
    props.dark === 'true'
      ? '0 0 40px rgba(200, 200, 200, 0.5)'
      : '0 0 40px rgba(0,0,0,0.5)'};
  background-color: ${props => (props.dark === 'true' ? '#101010' : '#f9f9f9')};
  padding: 20px;

  margin-top: 10px;
`
export const LogoImage = styled.img`
  height: 60px;
  padding: 10px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 8px;
`

export const Input = styled.input`
  width: 40vh;
  height: 30px;
  outline: none;
  font-family: 'Roboto';
`
export const LoginButton = styled.button`
  border: 0;
  border-radius: 8px;
  color: #ffffff;
  background-color: #1d81ec;
  height: 30px;

  cursor: pointer;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const ShowPasswordCard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px;
`
export const ShowPasswordLabel = styled.label`
  padding-bottom: 5px;
  padding-left: 5px;
`
export const ErrorMsg = styled.p`
  color: red;
`
