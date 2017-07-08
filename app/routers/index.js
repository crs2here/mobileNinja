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
                <Scene key="root">
                    <Scene 
                        key="main" 
                        component={MainScene}
                        title="Banquet.ninja"
                        initial={true}
                        navigationBarStyle={{backgroundColor:'#C0D0E4'}}
                        />
                    <Scene 
                        key="banquet" 
                        component={BanquetScene} 
                        title="Banquet ninja info"
                        navigationBarStyle={{backgroundColor:'#C0D0E4'}}
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