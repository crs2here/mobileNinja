import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default class Loading extends Component {
   render() {
      return (
         <View style = {styles.container}>
            <ActivityIndicator
               animating = {true}
               color = '#486C8F'
               size = "large"
               style = {styles.activityIndicator}
            />
         </View>
      )
   }
}


const styles = StyleSheet.create ({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 70
   },
   activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 80
   }
})