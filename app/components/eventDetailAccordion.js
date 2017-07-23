import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, TouchableHighlight, AsyncStorage} from 'react-native';
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
    const {eventDetails} = this.props;
    this.state = {
      foodCollapsed: true,
      notesCollapsed: true,
      sequenceCollapsed: true,
      eventDetails
    };    
  }    
  render() {
    const {eventDetails} = this.state;
    return (
      <Container>
        <TouchableHighlight onPress={() => { this.setState({ foodCollapsed: !this.state.foodCollapsed });}}>
          <View style={styles.header}>
            <Text>Food</Text>
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.foodCollapsed} align="center">
          <View style={styles.content}>
            {(Array.isArray(eventDetails.food)) ? 
                <List dataArray={eventDetails.food} renderRow={(food) =>
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
            : <Text>{eventDetails.food}</Text>}             
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
            {(Array.isArray(eventDetails.sequence)) ? 
              <List dataArray={eventDetails.sequence} renderRow={(sequence) =>
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
            : <Text>{eventDetails.sequence}</Text>}                      
          </View>
        </Collapsible>
      </Container>
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