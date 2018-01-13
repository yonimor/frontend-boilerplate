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
    console.log('instantiate LoginStore')
  }

  onLogin(email, password) {
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      console.log('LoginStates.FAIL');
      this.loginState = LoginStates.FAIL;
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log('LoginStates.SUCCESS', user);
        this.loginState = LoginStates.SUCCESS;
      } else {
        console.log('LoginStates.BEFORE');
        // No user is signed in.
      }
    });
  }

  onLogout() {
    this.loginState = LoginStates.BEFORE;
  }
}

export default new LoginStore();
