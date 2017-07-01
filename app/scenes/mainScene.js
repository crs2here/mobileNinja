import    React, { Component } from 'react';
import {  Image, View } from 'react-native';
import {  Container, 
          Content, 
          Card, 
          CardItem, 
          Thumbnail, 
          Text, 
          Button, 
          Body, 
          Title, 
          Header} from 'native-base';

var bnLogo = require ('../../Assets/iOS/Resources/icons/Icon-167.png');

class MainScene extends Component {
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
                  style={{height: 100, width: 350, flex: 1}}
                  source={bnLogo}
                />                  
                <Text style={{textAlign: 'left', marginTop: 10, marginBottom: 30, fontSize:16, fontWeight:'bold'}}>Banquet Ninja is dedicated to your success.</Text>
                <Text>
                   Our heritage is over 20 years of serving banquets and during that time we have crafted workflows that make our company run. Banquet Ninja wants you to participate in an ecosystem where ideas for success are shared and the workflows put those ideas into practice.
                </Text>
                <Text style={{textAlign: 'left', marginTop: 30, marginBottom: 30, fontWeight:'bold'}}>Running a restaurant is hard.{"\n"}
                                                                  Really hard.{"\n"}
                                                                  Banquet Ninja can help make it easier.</Text>

              </Body>
            </CardItem>
          </Card>                 
        </Content>
        <View style={{ paddingLeft:20, paddingRight:20, paddingBottom: 80}}>
          <Button info block>
            <Text style={{color:"white",fontSize:18}}>login</Text>
          </Button>
        </View>   
      </Container>
    );
  }  
}

export default MainScene;