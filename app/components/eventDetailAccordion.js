import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight} from 'react-native';
import { Container, Content, Text } from 'native-base';
import Collapsible from 'react-native-collapsible';

export default class EventDetailAccordion extends Component {
  state = {
    foodCollapsed: true,
    notesCollapsed: true,
    sequenceCollapsed: true, 
  };

  render() {
    return (
      <Container style={{paddingTop: 64}}>
        
        <TouchableHighlight onPress={() => { this.setState({ foodCollapsed: !this.state.foodCollapsed });}}>
          <View style={styles.header}>
            <Text>Food</Text>
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.foodCollapsed} align="center">
          <View style={styles.content}>
            <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
          </View>
        </Collapsible>

        <TouchableHighlight  onPress={() => { this.setState({ notesCollapsed: !this.state.notesCollapsed });}}>
          <View style={styles.header}>
            <Text>Notes</Text>
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.notesCollapsed} align="center">
          <View style={styles.content}>
            <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
          </View>
        </Collapsible>

        <TouchableHighlight  onPress={() => { this.setState({ sequenceCollapsed: !this.state.sequenceCollapsed });}}>
          <View style={styles.header}>
            <Text>Sequence</Text>
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.sequenceCollapsed} align="center">
          <View style={styles.content}>
            <Text>Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs</Text>
          </View>
        </Collapsible>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
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
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
});

const tempData = {
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

const BACON_IPSUM = 'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';