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

  onLogin(username, password) {
    console.log('login', username, password, baseUrl);
    request
      .post(`${baseUrl}/login`)
      .send({
        username,
        password
      })
      .set('Accept', 'application/json')
      .end((err, res) => {
        if (err || !res.ok) {
          this.loginState = LoginStates.FAIL;
        } else {
          this.loginState = LoginStates.SUCCESS;
        }
      });
  }
}

export default new LoginStore();
