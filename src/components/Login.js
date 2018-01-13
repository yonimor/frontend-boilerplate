import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { PageHeader, FormControl, Button } from 'react-bootstrap';
import classnames from 'classnames';
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
    const { loginState } = loginStore;

    return (
      <form
        className="Login"
        onSubmit={this.onLogin}
      >
        <PageHeader className="login-headline">Sign in</PageHeader>
        <FormControl
          type="email"
          className="login-input"
          value={email}
          placeholder="Email"
          required
          onChange={this.onChangeEmail}
        />
        <FormControl
          type="password"
          className="login-input"
          value={password}
          placeholder="Password"
          required
          onChange={this.onChangePassword}
        />
        <Button
          type="submit"
          disabled={loginStore.loginState === LoginStates.TRYING}
          className="login-submit"
          bsStyle="primary"
        >Submit</Button>
        {loginState === LoginStates.TRYING && <p className="login-msg login-try">Trying to login...</p>}
        {loginState === LoginStates.FAIL && <p className="login-msg login-fail">Login failed!</p>}
      </form>
    );
  }
};

export default Login;

