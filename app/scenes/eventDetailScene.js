import React, { Component } from 'react';
import { Container } from 'native-base';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import EventDetailAccordion from '../components/eventDetailAccordion'
import EventDetail from '../components/eventDetail';

import EventStore from '../stores/eventStore';
import AuthStore from '../stores/authStore';
const auth = new AuthStore();


async function getId () {
  let response = await AsyncStorage.getItem('id'); 
  return await JSON.parse(response) || []; 
}    

export default class EventDetails extends Component {
  constructor(props){
    super(props)
    this.state={
      isLoading: true, 
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
      getId()
        .then((id)=>{
          // need to figure out better way of passing both token, and id
          event.getEventDetails(this.state.token, id)
            .then((response)=>{
              const selectedEvent = response.data;
              console.log(response.data);
              const {name} = selectedEvent.venue[0] || "";
              const location= name || "no location set";
              const {_id, eventDate, eventName, banquetAttendeeHigh} = selectedEvent;
              const event = {_id, eventDate, eventName, banquetAttendeeHigh, location};
              const { menuItems, notes = "notes are not present", eventSteps} = selectedEvent;
              const food = (menuItems.length) ?  menuItems: "food has not been selected";
              const sequence = (eventSteps.length) ? eventSteps: "event sequence not set";
              const eventDetails = {food, notes, sequence};
              this.setState({
                isLoading: false,
                eventDetails,
                event
              });               
            })
            .catch((error)=>console.log(`error = ${error}`));      
        })
        .catch((error)=>console.log(`error = ${error}`));  
    })
    .catch((error)=>console.log(`error = ${error}`)); 
  }      
  render() {
    const {isLoading, eventDetails, event} = this.state;
    return (
      <View style={styles.container}> 
      {
        (isLoading)
        ? <Text> Something went wrong </Text> 
        : <View style={styles.container}>
            <EventDetail event={event}/>    
            <EventDetailAccordion eventDetails={eventDetails}/> 
          </View>
      }
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64
  },  
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'left',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
});