import apiBase from '../config/development';

export default class EventStore {
  
  constructor() {
    this.base = new apiBase;
    this.headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'x-access-token': ''          
    }
  }
  // status, [fields]
  getEventData(token) {
    this.headers['x-access-token'] = token;
    return new Promise((resolve, reject) =>{
      // when I don't have a headache make string dynamic
      fetch(`${this.base.url}/events/contracts?where[status]=booked&sel=eventName+eventDate+startTime`, {
        method: 'GET', headers: this.headers})
        .then((res) =>resolve(res.json()))
        .catch((error)=>reject(error))
        .done();      
    });
  }
  getEventDetails(token, id) {
    this.headers['x-access-token'] = token;
    return new Promise((resolve, reject) =>{
      fetch(`${this.base.url}/events/contracts/${id}`, {
        method: 'GET', headers: this.headers})
        .then((res) =>resolve(res.json()))
        .catch((error)=>reject(error))
        .done();      
    });
  }
}