import { observable } from 'mobx';

class LoginStore {
  @observable isLoggedIn = true;
}

export default new LoginStore();
