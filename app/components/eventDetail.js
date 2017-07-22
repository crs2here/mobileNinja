import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { List, ListItem} from 'native-base';
import EventStore from '../stores/eventStore';
import AuthStore from '../stores/authStore';
import moment from 'moment';
const auth = new AuthStore();


async function storeId (id) {
  await AsyncStorage.setItem('id', JSON.stringify(id));
  Actions.eventDetail(); 
}    

export default class EventDetail extends Component {
  constructor(props) {
    super(props)
    const {_id, eventDate, eventName, guestCount, location} = this.props.event;
    const event = {
      _id,
      eventDate,
      eventName,
      guestCount,
      location      
    }
    console.log(event);
    this.state = {
      event
    }
  }  
  render() {
    const {event} = this.state;
    return (
      <Grid>
        <Col style={{backgroundColor: '#486C8F', height: 75, width: 75}}>
          {/*day of week*/}
          <Text style={styles.dateBoxText}> {moment(event.eventDate).format("dddd")} </Text> 
          {/*date*/}                  
          <Text style={styles.dateBoxText}> {moment(event.eventDate).format("MMM Do")} </Text>   
          {/*time of event*/} 
          <Text style={styles.dateBoxText}> {moment(event.eventDate).format("h:mm a")} </Text> 
        </Col>
        <Col style={styles.detailBox} >
          <View style={styles.detailBoxView}>
            <Text> Event name: {event.eventName}</Text>
          </View>                  
          <View style={styles.detailBoxView}>
            <Text>Guest: {event.guestCount}</Text>
            <Text>  |  </Text>
            <Text>Location: {event.location}</Text>  
          </View>                  
        </Col>
      </Grid> 
    )  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64
  },
  dateBox : {
    backgroundColor: '#486C8F',
    color: 'white',
    height: 75, 
    width: 75
  },
  dateBoxText : {
    marginTop:5,
    color: 'white',
    justifyContent: 'space-around',
    alignSelf:'center',
    fontWeight: 'bold'
  },  
  detailBox : {
    backgroundColor: '#F5F5F5', 
    height: 75,
    alignItems:'center'
  },
  detailBoxView : {
    flexDirection: 'row', 
    marginTop: 15
  },  
})
