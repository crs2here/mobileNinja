import    React, { Component } from 'react';
import {  View } from 'react-native';
import {  Body,  
          Card, 
          CardItem, 
          Container,
          Content, 
          Header,
          Item, 
          Text,  
          Title} from 'native-base';
import { observer } from 'mobx-react/native';

import Login from '../components/login';
import Logo from '../components/logo';
          
export default class MainScene extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
      // loggedIn: false,
      // loadedCookie: false      
    }
  }

  // componentWillMount () {
  //   CookieManager.get(HOME_URL, (err, cookie) => {
  //     let isAuthenticated;
  //     // If it differs, change `cookie.remember_me` to whatever the name for your persistent cookie is!!!
  //     if (cookie && cookie.hasOwnProperty('remember_me')) {
  //       isAuthenticated = true;
  //     }
  //     else {
  //       isAuthenticated = false;
  //     }

  //     this.setState({
  //       loggedIn: isAuthenticated,
  //       loadedCookie: true
  //     });
  //   });
  // }

  render() {
    return (
      <Container style={{flex: 1, backgroundColor: '#F5FCFF',}}>
        <Content>
        <Header>
          <Body>
            <Title>Welcome to banquet.ninja</Title>
          </Body>
        </Header>          
          <Card style={{ flex: 0 }}>
            <CardItem style={{ backgroundColor: '#F5F5F5' }}>
              <Body>
                <Logo/>
                <Text style={{ textAlign: 'left', marginTop: 6, marginBottom: 25, fontSize: 16, fontWeight: 'bold' }}>Banquet Ninja is dedicated to your success.</Text>
                <Text>
                  Our heritage is over 20 years of serving banquets and during that time we have crafted workflows that make our company run. Banquet Ninja wants you to participate in an ecosystem where ideas for success are shared and the workflows put those ideas into practice.
                  </Text>
                <Text style={{ textAlign: 'left', marginTop: 20, marginBottom: 20, fontWeight: 'bold' }}>Running a restaurant is hard.{"\n"}
                  Really hard.{"\n"}
                  Banquet Ninja can help make it easier.</Text>

              </Body>
            </CardItem>
          </Card>
          <Login {...this.props}/>                   
        </Content>       
      </Container>
    );
  }  
}