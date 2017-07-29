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
                       <Text style={styles.dateBoxText}> {moment(sequence.time).format("h:mm a")} </Text>
                    </View>  
                    <View style={{height: 25, backgroundColor: '#F5F5F5'}}>
                      <Grid>
                        <Col> 
                          <Text style={{fontWeight: 'bold', paddingLeft: 5}}>Duration:</Text>
                        </Col>
                        <Col>                             
                          <Text style={{alignSelf:'flex-end', fontStyle:'italic', paddingRight: 5}}>{sequence.duration}</Text>     
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
      </Container>
    );
  }
}
/*
  <Grid style={{ backgroundColor: '#F5F5F5'}}>
    <Col style={{backgroundColor: '#486C8F', height: 70, width: 75}}>
      <Text style={styles.dateBoxText}> {moment(sequence.time).format("h:mm a")} </Text>  
    </Col>                    
    <Col style={{ backgroundColor: '#F5F5F5' }}>
      <Grid>
        <Col> 
          <Text style={{fontWeight: 'bold', paddingLeft: 5}}>Duration:</Text>
        </Col>
        <Col>                             
          <Text style={{alignSelf:'flex-end', fontStyle:'italic', paddingRight: 5}}>{sequence.duration}</Text>     
        </Col>
      </Grid>
      <Text style={styles.sequenceDetails}>{sequence.description}</Text>                       
    </Col>
  </Grid>    
*/
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
  accordionHdr: {
    fontWeight: 'bold', 
    fontSize: 16
  },
  dateBoxText : {
    paddingTop:5,
    color: 'white',
    alignSelf:'center',
    fontWeight: 'bold',
  },
  sequenceDetails : {
    fontStyle:'italic',
    paddingLeft: 5,
  }  
});