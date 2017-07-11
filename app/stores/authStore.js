import apiBase from '../config/development';
import { observable, action } from 'mobx';

export default class AuthStore {
  
  constructor() {
  }
  @action
  signIn(username, password) {
    const login = new apiBase;
    return new Promise((resolve, reject) =>{
      fetch(`${login.url}/account/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },body: JSON.stringify({username,password})
      }).then((res) =>{
        resolve(res.json());
      }).catch((error)=>{
        reject(error);
      }).done();      
    });
  }
}
