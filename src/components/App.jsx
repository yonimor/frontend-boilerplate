import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import LoginStore, { LoginStates } from '../stores/LoginStore';
import Main from './Main';
import Login from './Login';
import '../styles/App.scss';

const loginStore = new LoginStore();

class App extends Component {
  render() {
    return (
      <div>
        {loginStore.loginState === LoginStates.SUCCESS ? (
            <Main/>
          ): (
            <Login
              loginStore={loginStore}
            />
          )}
        <DevTools/>
      </div>
    );
  }
};

export default App;
