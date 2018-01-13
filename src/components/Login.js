import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { LoginStates } from '../stores/LoginStore';
import '../styles/Login.scss';

@observer
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.onLogin = this.onLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  onLogin(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const { loginStore } = this.props;
    loginStore.onLogin(username, password);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    const { username, password } = this.state;
    const { loginStore } = this.props;
    return (
      <form
        className="Login"
        onSubmit={this.onLogin}
      >
        <h1>Login</h1>
        <label
          htmlFor="username"
          className="login-label"
        >Username</label>
        <input
          type="text"
          id="username"
          className="login-input"
          value={username}
          onChange={this.onChangeUsername}
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

