import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, AsyncStorage, Text} from 'react-native';
import { Container, Content } from 'native-base';
import Collapsible from 'react-native-collapsible';
import { Col, Row, Grid } from "react-native-easy-grid";
import { List, ListItem} from 'native-base';
import moment from 'moment';
import EventDetailAccordionItem from '../components/eventDetailAccordionItem'
// this needs to be cleaned up 
export default class EventDetailAccordion extends Component {
  constructor(props) {
    super(props)
    const {eventDetails} = this.props;
    this.state = {
      foodCollapsed: false,
      notesCollapsed: false,
      sequenceCollapsed: false,
      eventDetails
    };    
  }    
  render() {
    const {eventDetails} = this.state;
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={() => { this.setState({ foodCollapsed: !this.state.foodCollapsed });}}>
          <View style={styles.header}>
            <Text style={styles.accordionHdr}>Food</Text>
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.foodCollapsed} align="center">
          <View style={styles.content}>
            {(Array.isArray(eventDetails.food)) ? 
                <List dataArray={eventDetails.food} renderRow={(food) =>
                  <ListItem>
                    <EventDetailAccordionItem item={{description: food.description, 
                                                     leftHeader:food.name,
                                                     rightHeader:`${food.quantity} @ ${food.price}`}}/>
                  </ListItem>
              }></List>
            : <Text>{eventDetails.food}</Text>}             
          </View>
        </Collapsible>

        <TouchableHighlight  onPress={() => { this.setState({ notesCollapsed: !this.state.notesCollapsed });}}>
          <View style={styles.header}>
            <Text style={styles.accordionHdr}>Notes</Text>
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.notesCollapsed} align="center">
          <View style={styles.content}>
            <Text style={{alignSelf:'flex-start'}}>{eventDetails.notes}</Text>
          </View>
        </Collapsible>

        <TouchableHighlight  onPress={() => { this.setState({ sequenceCollapsed: !this.state.sequenceCollapsed });}}>
          <View style={styles.header}>
            <Text style={styles.accordionHdr}>Sequence</Text>
          </View>
        </TouchableHighlight>
        <Collapsible collapsed={this.state.sequenceCollapsed} align="center">
          <View style={styles.content}>
            {(Array.isArray(eventDetails.sequence)) ? 
              <List dataArray={eventDetails.sequence} renderRow={(sequence) =>
                <ListItem>
                  {/* could be hours or minutes for  duration this logic needs to be built in here  */}
                  <EventDetailAccordionItem item={{description: sequence.description, 
                                                   leftHeader:moment(sequence.time).format("h:mm a"),
                                                   rightHeader:`${sequence.duration}m`}}/>
                </ListItem>
              }></List>
            : <Text>{eventDetails.sequence}</Text>}                      
          </View>
        </Collapsible>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  accordionHdr: {
    fontWeight: 'bold', 
    fontSize: 16
  },
  dateBoxText : {
    paddingTop:5,
    color: 'white',
    fontWeight: 'bold',
  },
  start: {
    paddingLeft: 5
  },
  end: {
    alignSelf:'flex-end', 
    paddingRight: 5
  },
  sequenceDetails : {
    fontStyle:'italic',
    paddingLeft: 5,
  }  
});