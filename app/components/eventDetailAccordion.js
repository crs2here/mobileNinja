import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight} from 'react-native';
import { Container, Content, Text } from 'native-base';
import moment from 'moment';
import Collapsible from 'react-native-collapsible';
import { Col, Row, Grid } from "react-native-easy-grid";
import { List, ListItem} from 'native-base';
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
    const event = response.data;
    const {eventDate, eventName, menuItems, venue, notes, eventSteps} = event;
    const eventDetails = {eventDate, eventName, menuItems, venue, notes, eventSteps};
    this.setState({
      isLoading: false,
      eventDetails
    });  
    // return {
    //   _id,
    //   eventDate,
    //   eventName,
    //   location: name || "no location set",
    //   guestCount: 50              
    // }
  }  
  // TODO: added list component now list data
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

const response = {
  "data": {
    "_id": "5957d62ffdd346e5f5cd53f0",
    "customer": {
      "_id": "5957d62ffdd346e5f5cd53d6",
      "firstName": "Ronald",
      "lastName": "Reagan",
      "notes": "this is a note",
      "__v": 0,
      "validationErrors": [],
      "contracts": [
        "5957d62ffdd346e5f5cd53f0",
        null
      ],
      "phoneNumbers": [
        {
          "contactType": "work",
          "primary": true,
          "number": "2024561111",
          "_id": "5957d62ffdd346e5f5cd53d7"
        }
      ],
      "emails": [
        {
          "emailType": "work",
          "primary": true,
          "email": "president@whitehouse.gov",
          "_id": "5957d62ffdd346e5f5cd53d8"
        }
      ],
      "addresses": [
        {
          "addressType": "work",
          "primary": true,
          "address1": "1600 Pennsylvania Ave. NW",
          "address2": "",
          "city": "Washington",
          "state": "DC",
          "zip": "20500",
          "_id": "5957d62ffdd346e5f5cd53d9"
        }
      ],
      "meta": {
        "company": "5957d62ffdd346e5f5cd53d2",
        "dateCreated": "2017-07-01T17:04:47.240Z"
      }
    },
    "eventName": "Smith Rehearsal Dinner",
    "natureOfEvent": "Plated full service dinner",
    "initialContactDate": "2016-12-25T08:00:00.000Z",
    "eventDate": "2017-07-31T07:00:00.000Z",
    "startTime": "2016-12-26T03:00:00.000Z",
    "price": 10000,
    "status": "booked",
    "notes": "test notes",
    "__v": 0,
    "commLog": [
      {
        "date": "2016-01-12T08:00:00.000Z",
        "commType": "email",
        "employee": "susan",
        "description": "test Description",
        "_id": "5957d62ffdd346e5f5cd53f1"
      }
    ],
    "menuItems": [
      {
        "_id": "596a4771c339b23b4caf0535",
        "name": "Mexican Fiesta",
        "description": "Southwest Caesar Salad, Pork Tenderloin with Tomatillo Sauce, Chicken Enchiladas, Spanish Rice, Tortilla Chips, Salsa, Homemade Guacamole, Flan Cups",
        "baseId": "5957d62ffdd346e5f5cd53e4",
        "price": 0,
        "quantity": 0
      }
    ],
    "venue": [
      {
        "_id": "59625031329e45a3e61b73c0",
        "name": "south dining room",
        "notes": "",
        "baseId": "5957d62ffdd346e5f5cd53e8"
      }
    ],
    "rentalItems": [],
    "eventSteps": [
      {
        "time": "2016-12-26T03:00:00.000Z",
        "duration": 60,
        "description": "Guests arrive",
        "_id": "5957d62ffdd346e5f5cd53f4"
      },
      {
        "time": "2016-12-26T03:00:00.000Z",
        "duration": 60,
        "description": "Guests eat",
        "_id": "5957d62ffdd346e5f5cd53f3"
      },
      {
        "time": "2016-12-26T03:00:00.000Z",
        "duration": 60,
        "description": "Guests leave",
        "_id": "5957d62ffdd346e5f5cd53f2"
      }
    ],
    "meta": {
      "company": "5957d62ffdd346e5f5cd53d2",
      "dateCreated": "2017-07-01T17:04:47.376Z"
    }
  }
};
