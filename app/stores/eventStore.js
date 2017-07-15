import apiBase from '../config/development';

export default class EventStore {
  
  constructor() {
  }
  // status, [fields]
  getEventData(token) {
    const base = new apiBase;
    return new Promise((resolve, reject) =>{
      // when I don't have a headache make string dynamic
      fetch(`${base.url}/events/contracts?where[status]=booked&sel=eventName+eventDate+startTime`, {
        method: 'GET', 
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': token          
        }
      }).then((res) =>{
        resolve(res.json());
      }).catch((error)=>{
        reject(error);
      }).done();      
    });
  }
}