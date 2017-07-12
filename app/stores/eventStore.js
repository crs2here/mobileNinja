import apiBase from '../config/development';

export default class EventStore {
  
  constructor() {
  }
  // status, [fields]
  getEventData() {
    const base = new apiBase;
    return new Promise((resolve, reject) =>{
      // when I don't have a headache make string dynamic

      // temp until I can figure out key chain stuff
      // headers.common['x-access-token'] = token;
      // TODO: change value to booked
      fetch(`${base.url}/events/contracts?where[status]=pending&sel=eventName+eventDate+startTime`, {
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

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OTU3ZDYyZmZkZDM0NmU1ZjVjZDUzZTAiLCJjb21wYW55IjoiNTk1N2Q2MmZmZGQzNDZlNWY1Y2Q1M2QyIiwiZmlyc3ROYW1lIjoiY2hyaXMxMjMiLCJsYXN0TmFtZSI6ImJhaWx5IiwidXNlcm5hbWUiOiJjaHJpc0BjaHJpcy5jb20iLCJfX3YiOjAsInJvbGVzIjpbImFkbWluIiwic3VwZXJVc2VyIl0sIm1ldGEiOnsiY29tcGFueSI6IjU5NTdkNjJmZmRkMzQ2ZTVmNWNkNTNkMiIsImRhdGVDcmVhdGVkIjoiMjAxNy0wNy0wMVQxNzowNDo0Ny4yNTJaIn0sImlhdCI6MTQ5OTgxOTAxMCwiZXhwIjoxNDk5OTA1NDEwfQ.J4i3XunI20rmuj2RBzecy7-TpSBZJwy1kCz_3_eZQcM";