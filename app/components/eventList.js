import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { List, ListItem} from 'native-base';
import { observer } from 'mobx-react/native';
import EventStore from '../stores/eventStore';
@observer
export default class EventList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const event = new EventStore();
    let upcomingEvent;
    event.getEventData()
      .then((response)=>{
        console.log(response);
        upcomingEvent = response;
      })
      .catch((error)=>{
        console.log(`error = ${error}`);
      });
  }
  
  render() {
    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can'];
    return (
      <View style={styles.container}>
        <List dataArray={items} renderRow={(item) =>           
            <ListItem>
              <Grid>
                  {/* 
                    add touchable to row 
                    pass in id, and navigate to route
                  */}
                  <Col style={{backgroundColor: '#486C8F', height: 75, width: 75}}>
                    {/*day of week*/}
                    <Text style={styles.dateBoxText}> Friday </Text> 
                    {/*date*/}                  
                    <Text style={styles.dateBoxText}> Nov 6 </Text>   
                    {/*time of event*/} 
                    <Text style={styles.dateBoxText}> 7:30 PM </Text> 
                  </Col>
                  <Col style={styles.detailBox}>
                    <View style={styles.detailBoxView}>
                      <Text onPress={() =>{ console.log(item)}}> Event name: {item}</Text>
                    </View>                  
                    <View style={styles.detailBoxView}>
                      <Text>Guest: # ppl</Text>
                      <Text>  |  </Text>
                      <Text>Location: room</Text>  
                    </View>                  
                  </Col>
              </Grid>              
            </ListItem>
          }>        
        </List>
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
    alignSelf:'center'
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