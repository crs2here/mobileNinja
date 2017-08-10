import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { List, ListItem} from 'native-base';
import moment from 'moment';

import EventDetail from '../components/eventDetail';
import Loading from '../components/loading';

import EventStore from '../stores/eventStore';
import AuthStore from '../stores/authStore';

const auth = new AuthStore();

async function storeId (id) { 
  await AsyncStorage.setItem('id', JSON.stringify(id));
  Actions.eventDetail(); 
}    

export default class EventList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading:true
    }
  }
  componentDidMount() {
    auth.isLoggedIn()
    .then((token)=>{
      if(token.length > 0){
        this.setState({
          isLoading: true,
          token
        }); 
      }
      const event = new EventStore();
      event.getEventData(this.state.token)
        .then((response)=>{
          if(response.success || response.data.length > 0) {
            let events = response.data.map(function(eventDetail) {
              const {_id, eventDate, eventName, banquetAttendeeHigh, serviceType} = eventDetail;
              const {name} = eventDetail.venue[0] || "";
              return {
                _id,
                eventDate,
                eventName,
                location: name || "no location set",
                banquetAttendeeHigh,
                serviceType: serviceType || "type not set"
              }
            });

            this.setState({
              isLoading: false,
              upcomingEvents: events
            }); 
          } else {
            auth.storeToken(null);
            Actions.main();
          }    
        }).catch((error)=>console.log(`error = ${error}`));      
    }).catch((error)=>console.log(`error = ${error}`)); 
  }
  
  render() {
    const {isLoading, upcomingEvents} = this.state;
    return (
      <View style={styles.container}>
      { 
        (isLoading)
          ? <Loading/> 
          : <List dataArray={upcomingEvents} renderRow={(event) =>           
            <ListItem onPress={() =>{storeId(event._id)}}>
               <EventDetail event={event}/>
            </ListItem>
          }>      
        </List>
      }
      </View> 
    )  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64
  }
})
