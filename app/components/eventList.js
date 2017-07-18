import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { List, ListItem} from 'native-base';
import EventStore from '../stores/eventStore';
import AuthStore from '../stores/authStore';
import moment from 'moment';
const auth = new AuthStore();

export default class EventList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading:true
    }
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
      event.getEventData(this.state.token)
        .then((response)=>{
          // temp num of people hard coded
          let events = response.data.map(function(eventDetail) {
            const {_id, eventDate, eventName} = eventDetail;
            const {name} = eventDetail.venue[0] || "";
            return {
              _id,
              eventDate,
              eventName,
              location: name || "no location set",
              guestCount: 50              
            }
          });

          this.setState({
            isLoading: false,
            upcomingEvents: events
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
  
  render() {
    const {isLoading, upcomingEvents} = this.state;
    return (
      <View style={styles.container}>
      { 
        (isLoading)
          ? <Text> Something went wrong </Text> 
          : <List dataArray={upcomingEvents} renderRow={(event) =>           
            <ListItem onPress={() =>{ console.log(event._id)}}>
              <Grid>
                  {/* 
                    add touchable to row 
                    pass in id, and navigate to route
                  */}
                  <Col style={{backgroundColor: '#486C8F', height: 75, width: 75}}>
                    {/*day of week*/}
                    <Text style={styles.dateBoxText}> {moment(event.eventDate).format("dddd")} </Text> 
                    {/*date*/}                  
                    <Text style={styles.dateBoxText}> {moment(event.eventDate).format("MMM Do")} </Text>   
                    {/*time of event*/} 
                    <Text style={styles.dateBoxText}> {moment(event.eventDate.time).format("h:mm a")} </Text> 
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
            </ListItem>
          }>        
        </List>
      }
      </View> 
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

/* this.state.upcomingEvents */
/*
 stolen code from fb

  return fetch('https://facebook.github.io/react-native/movies.json')
  .then((response) => response.json())
  .then((responseJson) => {
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState({
      isLoading: false,
      dataSource: ds.cloneWithRows(responseJson.movies),
    }, function() {
      // do something with new state
    });
  })
  .catch((error) => {
    console.error(error);
  });

*/