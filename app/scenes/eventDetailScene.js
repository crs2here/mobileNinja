import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, List, ListItem, Text, Separator } from 'native-base';
export default class ListSeparatorExample extends Component {
  render() {
    return (
      <Container style={{paddingTop: 64}}>
        <Content>
          <Separator bordered>
            <Text>Food</Text>
          </Separator>
          <ListItem last>
            { (false)                           ? 
              <Text>mock out stuff here</Text> : 
              <View></View>
            }
          </ListItem>
          <Separator bordered>
            <Text>Notes</Text>
          </Separator>
          <ListItem>
            <Text>mock out notes</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
})


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