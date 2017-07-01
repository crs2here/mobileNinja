import {Scene, Router} from "react-native-router-flux";
import React, { Component } from "react"

// Scenes
// import LoginScene from "../Scenes/loginScene";
import MainScene from "../scenes/mainScene";

// Stores
// import ListStore from "../Stores/listStore";

class Routers extends Component {
    render() {
        return (
            <Router>
                {/*<Scene key="loginFlow">
                    <Scene key="login" component={LoginScene} hideNavBar/>
                </Scene>*/}
                <Scene key="mainFlow">
                    <Scene key="main" 
                    component={MainScene}/>
                </Scene>
            </Router>
        );
    }
}

export default Routers;