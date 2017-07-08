import {Scene, Router} from "react-native-router-flux";
import React, { Component } from "react"

// Scenes
import MainScene from "../scenes/mainScene";
import BanquetScene from "../scenes/banquetScene";

// Stores
import AuthStore from "../stores/authStore"

class Routers extends Component {
    render() {
        return (
            <Router store={AuthStore}>
                <Scene key="mainFlow">
                    <Scene 
                        key="main" 
                        component={MainScene} //MainScene
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