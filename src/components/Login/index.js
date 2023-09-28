import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginContainer,
  ResponsiveContainer,
  LogoImage,
  InputContainer,
  Input,
  LoginButton,
  FormContainer,
  ShowPasswordCard,
  ShowPasswordLabel,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    visiblePass: '',
    errorMsg: '',
  }

  onSuccessfulLogin = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = msg => {
    this.setState({errorMsg: msg})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccessfulLogin(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    const {password} = this.state
    this.setState(prev => ({showPassword: !prev.showPassword}))

    this.setState({visiblePass: password})
  }

  renderFormContainer = () => {
    const {username, password, showPassword, visiblePass, errorMsg} = this.state

    return (
      <FormContainer onSubmit={this.onFormSubmit}>
        <LogoImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="website logo"
        />

        <InputContainer>
          <label htmlFor="username"> USERNAME</label>
          <Input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.onChangeUsername}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="password"> PASSWORD</label>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={showPassword ? visiblePass : password}
            onChange={this.onChangePassword}
          />
        </InputContainer>

        <LoginButton type="submit"> Login</LoginButton>
        <ErrorMsg>{errorMsg}</ErrorMsg>

        <ShowPasswordCard>
          <input
            type="checkbox"
            id="showPassword"
            value={showPassword}
            onChange={this.onChangeShowPassword}
          />
          <ShowPasswordLabel htmlFor="showPassword">
            Show Password
          </ShowPasswordLabel>
        </ShowPasswordCard>
      </FormContainer>
    )
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <ResponsiveContainer>{this.renderFormContainer()}</ResponsiveContainer>
      </LoginContainer>
    )
  }
}

export default Login
