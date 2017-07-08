import {Scene, Router} from "react-native-router-flux";
import React, { Component } from "react"

// Scenes
import MainScene from "./app/scenes/mainScene";
import BanquetScene from "./app/scenes/banquetScene";

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
                    key="banquet" 
                    component={BanquetScene} 
                    animation="fade"
                    title="Banquet.ninja info"
                    navigationBarStyle={{backgroundColor:'#C0D0E4'}}
                    />                        
            </Scene>
        </Router>
    );
  }
}
