import    React, { Component } from 'react';
import {  Alert, View } from 'react-native';
import {  Button, 
          Form, 
          Input, 
          Item, 
          Label,
          Text} from 'native-base';
import { Actions } from 'react-native-router-flux';
import AuthStore from '../stores/authStore';

const auth = new AuthStore();

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
  updateUsername(username) { this.setState({username}) }
  updatePassword(password) { this.setState({password}) }

  signIn() {
    const { username, password } = this.state;
    if( username && password ){
      auth.signIn(username, password)
        .then((response)=>{
          if(response.success){
            auth.storeToken(response.token);
            this.setState({ token: response.token });             
            Actions.events();
          } else {
            Alert.alert('Invalid Credentials',`please enter a correct data`,[{text: 'ok'}]);
          }
        })
        .catch((error)=>{
          console.log(`error = ${error}`);
        })
    } else {
      const missingData = (!username) ? 'username' : 'password';
      Alert.alert('Missing Data',`please enter a ${missingData}`,[{text: 'ok'}]);
    } 
  }
  
  componentDidMount() {
    auth.isLoggedIn()
    .then((token)=>{
      if(token.length){
        Actions.events();
      }
    })
    .catch((error)=>{
      console.log(`error = ${error}`);
    });    
  }  

  render() {
    return (
      <View>
        <Form>
          <Item floatingLabel>
            <Label>Username</Label>
            <Input 
              onChangeText={(username) => this.setState({username})}
              value={this.state.username}                
            />                
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input  secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}/>
          </Item>
        </Form>
        <Button 
          info block
          onPress={this.signIn.bind(this)}>

          <Text style={{color:"white",fontSize:18}}>login</Text>
        </Button>                  
      </View>      
    )  
  }
}
