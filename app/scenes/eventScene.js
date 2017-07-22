import React, { Component } from 'react';
import { Container, Content} from 'native-base';
import EventList from '../components/eventList'

export default class EventScene extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  //event={}
  render() {
    return (
      <Container>
        <Content>
          <EventList/>
        </Content>
      </Container>
    );
  };
};