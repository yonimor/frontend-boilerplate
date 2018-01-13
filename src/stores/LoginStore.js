import { observable } from 'mobx';
import { baseUrl } from '../constants';
import request from 'superagent';

export const LoginStates = {
  BEFORE: 'before',
  TRYING: 'trying',
  SUCCESS: 'success',
  FAIL: 'fail',
};

class LoginStore {
  @observable loginState = LoginStates.BEFORE;

  constructor() {
    console.log('instantiate LoginStore');
    this.getLoggedInUser();
  }

  getLoggedInUser() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loginState = LoginStates.SUCCESS;
      }
    });
  }

  onLogin(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      this.loginState = LoginStates.FAIL;
    });
  }

  onLogout() {
    firebase.auth().signOut().then(() => {
      this.loginState = LoginStates.BEFORE;
    })
  }
}

export default new LoginStore();
