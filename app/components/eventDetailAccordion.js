import React, { Component } from 'react';
import { StyleSheet, View, TouchableHighlight, AsyncStorage, Text} from 'react-native';
import { Container, Content } from 'native-base';
import Collapsible from 'react-native-collapsible';
import { Col, Row, Grid } from "react-native-easy-grid";
import { List, ListItem} from 'native-base';
import moment from 'moment';

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
                    <Grid>
                      <Col>
                        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                          <Text style={{alignSelf:'flex-start', fontWeight: 'bold'}}>{food.name}</Text>
                          <Text style={{alignSelf:'flex-end', fontWeight: 'bold'}}>{food.quantity}@{food.price}</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent:'space-between'}}>  
                          <Text style={{alignSelf:'flex-start', fontStyle:'italic', paddingTop: 10}}>{food.description}</Text>
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
                  <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{height: 25, backgroundColor: '#486C8F'}}>
                      <Grid>
                        <Col> 
                          <Text style={[styles.dateBoxText, styles.start]}> {moment(sequence.time).format("h:mm a")} </Text> 
                        </Col>
                        <Col>                             
                          <Text style={[styles.dateBoxText, styles.end]}>{sequence.duration}</Text>    
                        </Col>
                      </Grid>                         
                    </View>  
                    <View style={{backgroundColor: '#F5F5F5'}}>
                      <Text style={styles.sequenceDetails}>{sequence.description}</Text>
                    </View>  
                  </View>
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