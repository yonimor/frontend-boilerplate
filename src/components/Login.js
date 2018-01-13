import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { LoginStates } from '../stores/LoginStore';
import '../styles/Login.scss';

@observer
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.onLogin = this.onLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const { loginStore } = this.props;
    loginStore.onLogin(email, password);
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    const { email, password } = this.state;
    const { loginStore } = this.props;
    return (
      <form
        className="Login"
        onSubmit={this.onLogin}
      >
        <h1>Login</h1>
        <label
          htmlFor="email"
          className="login-label"
        >Email</label>
        <input
          type="email"
          id="email"
          className="login-input"
          value={email}
          onChange={this.onChangeEmail}
        />
        <label
          htmlFor="password"
          className="login-label"
        >Password</label>
        <input
          type="password"
          id="password"
          className="login-input"
          value={password}
          onChange={this.onChangePassword}
        />
        <input
          type="submit"
          value="Submit"
          disabled={loginStore.loginState === LoginStates.TRYING}
          className="login-submit"
        />
      </form>
    );
  }
};

export default Login;

