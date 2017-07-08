import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { List, ListItem} from 'native-base';
import { observer } from 'mobx-react/native'

@observer
export default class EventList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // updateUsername(username) { this.setState({username}) }
  // updatePassword(password) { this.setState({password}) }
  
  render() {
    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can'];
    return (
      <View style={styles.container}>
        <List dataArray={items} renderRow={(item) =>           
            <ListItem>
              <Text onPress={() =>{ console.log(item)}} >{item}</Text>
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
})