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
  @observable loginState = LoginStates.TRYING;

  constructor() {
    this.listenToFirebaseLoginState();
  }

  listenToFirebaseLoginState() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loginState = LoginStates.SUCCESS;
      } else {
        this.loginState = LoginStates.BEFORE;
      }
    });
  }

  onLogin(email, password) {
    this.loginState = LoginStates.TRYING;

    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      this.loginState = LoginStates.FAIL;
    });
  }

  onLogout() {
    firebase.auth().signOut();
  }
}

export default new LoginStore();
