import React, { Component } from 'react';
import { StyleSheet, 
         View,
         Text } from 'react-native';
import { Container, 
         Content, 
         List, 
         ListItem} from 'native-base';
export default class BanquetScene extends Component {
  render() {
    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can','Mama Sakho','Emre Can'];
    return (
      <Container syt>
        <Content>
          <View style={styles.container}>
            <Text style={styles.sectionHeader}>Banquet Ninja tempo header for second page that will have data</Text>
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
  sectionHeader: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#486C8F',
    color: 'white',
    textAlign: 'center'
  },
})