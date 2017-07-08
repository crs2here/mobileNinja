import React, { Component } from 'react';
import { StyleSheet, 
         View,
         Text } from 'react-native';
import { Container, 
         Content, 
         List, 
         ListItem} from 'native-base';

export default class EventScene extends Component {
  render() {
    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can'];
    return (
      <Container syt>
        <Content>
          <View style={styles.container}>
            <List dataArray={items} renderRow={(item) =>           
                <ListItem>
                  <Text>{item}</Text>
                </ListItem>
              }>        
            </List>
          </View> 
        </Content>
      </Container>
    );
  };
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 64
  },
})