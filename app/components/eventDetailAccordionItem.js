import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
export default class EventDetailAccordionItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.item
    }
  }    
  render() {
    const {item} = this.state;
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{height: 25, backgroundColor: '#486C8F'}}>
          <Grid>
            <Col> 
              <Text style={[styles.header, styles.start]}> {item.leftHeader} </Text> 
            </Col>
            <Col>                             
              <Text style={[styles.header, styles.end]}>{item.rightHeader}</Text>    
            </Col>
          </Grid>                         
        </View>  
        <View style={{backgroundColor: '#F5F5F5'}}>
          <Text style={styles.description}>{item.description}</Text>
        </View>  
      </View>
    )
   }
}

const styles = StyleSheet.create ({
  header: {
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
  description : {
    fontStyle:'italic',
    padding: 15,
  }        
})
