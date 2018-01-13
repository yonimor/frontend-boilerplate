import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Button } from 'react-bootstrap';
import '../styles/Main.scss';
import Logo from '../assets/images/logo.png';

@observer
class Main extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    const { loginStore } = this.props;

    loginStore.onLogout();
  }

  render() {
    return (
      <div className="Main">
        <header className="main-header">
          <img className="main-logo" src={Logo} alt="Logo"/>
          <Button
            className="logout"
            onClick={this.onLogout}
            bsStyle="primary"
          >Logout</Button>
        </header>
      </div>
    );
  }
};

export default Main;

