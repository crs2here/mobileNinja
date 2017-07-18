import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight} from 'react-native';
import { Container, Content, Text } from 'native-base';
import Collapsible from 'react-native-collapsible';
import { Col, Row, Grid } from "react-native-easy-grid";
import { List, ListItem} from 'native-base';

import EventStore from '../stores/eventStore';
import AuthStore from '../stores/authStore';
import moment from 'moment';
const auth = new AuthStore();

export default class EventDetailAccordion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      foodCollapsed: true,
      notesCollapsed: true,
      sequenceCollapsed: true,
      isLoading: true, 
    };    
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
      // need to figure out better way of passing both token, and id
      // temporary hard code id for now just to ensure call is working
      event.getEventDetails(this.state.token, "5957d62ffdd346e5f5cd53f0 ")
        .then((response)=>{
          const event = response.data;
          const {eventDate, eventName, menuItems, venue, notes, eventSteps} = event;
          const eventDetails = {eventDate, eventName, menuItems, venue, notes, eventSteps};
          this.setState({
            isLoading: false,
            eventDetails
          });               
        })
        .catch((error)=>{
          console.log(`error = ${error}`);
        });      
    })
    .catch((error)=>{
      console.log(`error = ${error}`);
    }); 
  }  
  // TODO: added list component new list data
  render() {
    const {isLoading, eventDetails} = this.state;
              {/* <Text>{eventDetails.menuItems[0].name}</Text>              
              <Text>{eventDetails.menuItems[0].description}</Text>              
              <Text>{eventDetails.menuItems[0].quantity}</Text>              
              <Text>{eventDetails.menuItems[0].price}</Text>               */}
    return (
      <View style={styles.container}>
        {
        (isLoading)
        ? <Text> Something went wrong </Text> 
        : 
        <Container>
          <TouchableHighlight onPress={() => { this.setState({ foodCollapsed: !this.state.foodCollapsed });}}>
            <View style={styles.header}>
              <Text>Food</Text>
            </View>
          </TouchableHighlight>
          <Collapsible collapsed={this.state.foodCollapsed} align="center">
            <View style={styles.content}>
              <List dataArray={eventDetails.menuItems} renderRow={(food) =>
                <ListItem onPress={() => { console.log(event._id) }}>
                  <Grid>
                    <Col>
                      <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text style={{alignSelf:'flex-start'}}>item: {food.name}</Text>
                        <Text style={{alignSelf:'flex-end'}}>price: {food.price}</Text>
                        <Text style={{alignSelf:'flex-end'}}>quantity: {food.quantity}</Text>
                      </View>
                    </Col>
                  </Grid>
                </ListItem>
              }></List>              
            </View>
          </Collapsible>

          <TouchableHighlight  onPress={() => { this.setState({ notesCollapsed: !this.state.notesCollapsed });}}>
            <View style={styles.header}>
              <Text>Notes</Text>
            </View>
          </TouchableHighlight>
          <Collapsible collapsed={this.state.notesCollapsed} align="center">
            <View style={styles.content}>
              <Text style={{alignSelf:'flex-start'}}>{eventDetails.notes}</Text>
            </View>
          </Collapsible>

          <TouchableHighlight  onPress={() => { this.setState({ sequenceCollapsed: !this.state.sequenceCollapsed });}}>
            <View style={styles.header}>
              <Text>Sequence</Text>
            </View>
          </TouchableHighlight>
          <Collapsible collapsed={this.state.sequenceCollapsed} align="center">
            <View style={styles.content}>
              <List dataArray={eventDetails.eventSteps} renderRow={(sequence) =>
                <ListItem onPress={() => { console.log(event._id) }}>
                  <Grid>
                    <Col>
                      <View style={{justifyContent:'space-between'}}>
                        <Text style={{alignSelf:'flex-start'}}>time: {moment(sequence.time).format("h:mm a")}</Text>
                        <Text style={{alignSelf:'flex-start'}}>duration: {sequence.duration}</Text>
                        <Text style={{alignSelf:'flex-start'}}>{sequence.description}</Text>
                      </View>
                    </Col>
                  </Grid>
                </ListItem>
              }></List>                 
            </View>
          </Collapsible>
        </Container>
      }
      </View> 
    );
  }
}
              // <Text>{moment(eventDetails.eventSteps[0]).format("h:mm a")}</Text>
              // <Text>{eventDetails.eventSteps[0].duration}</Text>
              // <Text>{eventDetails.eventSteps[0].description}</Text>

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