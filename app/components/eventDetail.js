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
    const {_id, eventDate, eventName, banquetAttendeeHigh, location, serviceType} = this.props.event;
    const event = {
      _id,
      eventDate,
      eventName,
      banquetAttendeeHigh,
      location: location || "location not set",
      serviceType: serviceType || "type not set"      
    }
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
          <Text style={[styles.dateBoxText, styles.biggerText]}> {moment(event.eventDate).format("dddd").slice(0,3).toUpperCase()} </Text> 
          {/*date*/}                  
          <Text style={[styles.dateBoxText, styles.smallerText]}> {moment(event.eventDate).format("MMM Do")} </Text>   
          {/*time of event*/} 
          <Text style={[styles.dateBoxText, styles.biggerText]}> {moment(event.eventDate).format("h:mma").slice(0, -1).toLowerCase()} </Text> 
        </Col>
        <Col style={styles.detailBox} >
          <View style={styles.detailBoxView}>
            <Text style={styles.biggerText}>{event.eventName}</Text>
          </View>                  
          <View style={styles.detailBoxView}>
            <Text>{event.banquetAttendeeHigh} ppl</Text>
            <Text>  |  </Text>
            <Text>{event.location}</Text>  
            <Text>  |  </Text>
            <Text>{event.serviceType}</Text>  
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
  biggerText: {
    fontSize: 16
  },
  smallerText: {
    fontSize: 11,
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
