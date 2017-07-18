import {Scene, Router} from "react-native-router-flux";
import React, { Component } from "react"

// Scenes
import MainScene from "./app/scenes/mainScene";
import EventScene from "./app/scenes/eventScene";
import EventDetailScene from "./app/scenes/eventDetailScene";

// Stores
import AuthStore from "./app/stores/authStore"

export default class App extends React.Component {
  render() {
    return (
        <Router store={AuthStore}>
            <Scene key="root">
                <Scene 
                    key="main" 
                    component={MainScene}
                    animation="fade"
                    title="Welcome"
                    navigationBarStyle={{backgroundColor:'#C0D0E4'}}
                    initial
                    />
                <Scene 
                    key="events" 
                    component={EventScene} 
                    animation="fade"
                    title="Upcoming Events"
                    navigationBarStyle={{backgroundColor:'#C0D0E4'}}
                    /> 
                  <Scene 
                    key="eventDetail" 
                    component={EventDetailScene} 
                    animation="fade"
                    title="Event Detail"
                    navigationBarStyle={{backgroundColor:'#C0D0E4'}}
                    />                                              
            </Scene>
        </Router>
    );
  }
}
