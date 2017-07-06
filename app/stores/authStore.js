import { observable, action } from 'mobx'
import apiBase from '../config/development';

export default class AuthStore {
  @observable authUser = null

  constructor() {}

  @action  // need to figure out mobx stuff
  // need to figure out how to call this from login component
  signIn({email, password}) {
    (async () => {
      try {  
        const login = new apiBase;
        let response = await fetch(`${login.url}/account/login`, {  
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },body: JSON.stringify({username,password})
        });
        return await response.json();
      } catch(error) {
        console.error(error);
      }
    })();
  }
}

