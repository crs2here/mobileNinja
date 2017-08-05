import React, { Component } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Loading extends Component {

   state = { animating: true }

   closeActivityIndicator = () => setTimeout(() => this.setState({ animating: false }), 6000)

   componentDidMount = () => this.closeActivityIndicator()

   render() {
      const animating = this.state.animating
      return (
         <View style = {styles.container}>
            <ActivityIndicator
               animating = {animating}
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