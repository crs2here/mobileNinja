import {Scene, Router} from "react-native-router-flux";
import React, { Component } from "react"

// Scenes
import MainScene from "../scenes/mainScene";

// Stores
import AuthStore from "../stores/authStore"

class Routers extends Component {
    render() {
        return (
            <Router store={AuthStore}>
                <Scene key="mainFlow">
                    <Scene 
                        key="main" 
                        component={MainScene}
                        title="Banquet.ninja"
                        />
                </Scene>
            </Router>
        );
    }
}

export default Routers;

/*
constructor(props){
    super(props);
    this.state = {
        store: {
            auth: console.log("object")
        }            
    }
}
 */