import { observable, action } from 'mobx';
import { baseUrl } from "../constants";

class LoginStore {
  @observable isLoggedIn = false;
  @observable user = null;
  
  @action login() {
    fetch(`${baseUrl}/login`, {
      method: 'post',
      body: JSON.stringify({
        username: 'yoni',
        password: 'mor'
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      return res.json();
    }).then((res) => {
      if (!!res) {
        console.log(res);
        this.isLoggedIn = true;
        this.user = res;
      }
    });
  }
}

export default new LoginStore();
