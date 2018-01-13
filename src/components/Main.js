import React, { Component } from 'react';
import { observer } from 'mobx-react';

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
        <h1>Main</h1>
        <button
          className="logout"
          onClick={this.onLogout}
        >Logout</button>
      </div>
    );
  }
};

export default Main;

