import React, { Component } from 'react';
import { observer, inject } from "mobx-react";
import DevTools from 'mobx-react-devtools';
import { LoginStates } from '../stores/LoginStore';
import Main from '../components/Main';
import Login from '../components/Login';
import '../styles/App.scss';

@inject("loginStore") @observer
class Root extends Component {
  render() {
    const { loginStore } = this.props;

    return (
      <div className="AppContainer">
        {loginStore.loginState !== LoginStates.SUCCESS && <Login loginStore={loginStore}/>}
        {loginStore.loginState === LoginStates.SUCCESS && <Main loginStore={loginStore} />}
        {/*<DevTools/>*/}
      </div>
    );
  }
};

export default Root;
