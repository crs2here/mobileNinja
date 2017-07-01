import    React, { Component } from 'react';
import {  Image, View } from 'react-native';
import {  Body, 
          Button, 
          Card, 
          CardItem, 
          Container,
          Content, 
          Form, 
          Header,
          Input, 
          Item, 
          Label,
          Text, 
          Thumbnail, 
          Title} from 'native-base';

var bnLogo = require ('../../Assets/iOS/Resources/icons/Icon-167.png');

class MainScene extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <Container>
        <Content>
        <Header>
          <Body>
            <Title>Welcome to banquet.ninja</Title>
          </Body>
        </Header>          
          <Card style={{flex: 0}}>
            <CardItem style={{backgroundColor:'#F5F5F5'}}>
              <Body>
                <Image
                  style={{height: 80, width: 350, flex: 1}}
                  source={bnLogo}
                />                  
                <Text style={{textAlign: 'left', marginTop: 6, marginBottom: 25, fontSize:16, fontWeight:'bold'}}>Banquet Ninja is dedicated to your success.</Text>
                <Text>
                   Our heritage is over 20 years of serving banquets and during that time we have crafted workflows that make our company run. Banquet Ninja wants you to participate in an ecosystem where ideas for success are shared and the workflows put those ideas into practice.
                </Text>
                <Text style={{textAlign: 'left', marginTop: 20, marginBottom: 20, fontWeight:'bold'}}>Running a restaurant is hard.{"\n"}
                                                                  Really hard.{"\n"}
                                                                  Banquet Ninja can help make it easier.</Text>

              </Body>
            </CardItem>
          </Card>
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
                        value={this.state.password}                
                />
              </Item>
            </Form>          
          </View>        
          <View>
            <Button 
              info block
              onPress={() => { console.log(this.state)}}
            >
              <Text style={{color:"white",fontSize:18}}>login</Text>
            </Button>
          </View>                              
        </Content>       
      </Container>
    );
  }  
}

export default MainScene;

// onChangeText={(username) => this.setState({username})}
// value={this.state.username}