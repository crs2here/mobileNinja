import    React, { Component } from 'react';
import {  Image, View } from 'react-native';
import {  Body, 
          Button, 
          Container,
          Content, 
          Form, 
          Header,
          Input, 
          Item, 
          Label,
          Text, 
          Title        } from 'native-base';

import { observer } from 'mobx-react/native'
// import AuthStore from './stores/authStore'

@observer
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loading: null
    }
  }
  updateUsername(username) { this.setState({username}) }
  updatePassword(password) { this.setState({password}) }


  // trying to write post here and then will move it to store
  signIn() { 
    const { username, password } = this.state;
    // const results =asyncSignIn(username,password);
    console.log(results);
    // this.setState({loading: true},() => {
    //   console.log(email);
    // })
  }  
  render() {
    const { loading } = this.state
    // const { auth } = this.props.store

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
/*onPress={this.props.onLoginPress}*/
// <View theme={this.props.theme}>
//   <InputGroup style={{marginBottom:10}} boarderType='round'>
//     <Icon style={{color:"#fff"}} name='person-outline'/>
//     <Input style={{color:"#fff"}}
//       placeholder='Please Enter Email'
//       placeholderTextColor="#fff"
//       onChangeText={(email) => { this.updateEmail(email)}} />
//   </InputGroup>
//   <InputGroup style={{marginBottom:10}} boarderType='round'>
//     <Icon style={{color:"#fff"}} name='lock-open'/>
//     <Input style={{color:"#fff"}}
//       placeholder='Please Enter Password'
//       placeholderTextColor="#fff"
//       secureTextEntry={true}
//       onChangeText={(pass) => { this.updatePassword(pass)}} />
//   </InputGroup>
//   <Button rounded block style={{marginBottom:10}} onPress={this.signIn.bind(this)}>
//     {'Login'}
//   </Button>
// </View>  

    // console.log("~~~~~~~~~~~~~~~~~~~~");
    // console.log(this.props);
    // const authStore = new AuthStore()
    // console.log("===================");
    // console.log(this.props.store.AuthStore);
    // console.log("===================!!!!!!!!!!!");
    // const { email, password } = this.state
    // this.setState({loading: true},() => {
      // this.props.store(email, password);
      // authStore.signIn(email, password);
      // call function with parsed arguments
      // auth.signIn({email, password})
      //   .then(() => {
      //     this.props.navigator.replace({
      //       title: 'Match',
      //       passProps: this.props
      //     })
      //   })