import React, { Component } from 'react';
import { Container } from 'native-base';
import EventDetailAccordion from '../components/eventDetailAccordion'

export default class EventDetails extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
    
  render() {
    return (
      <Container>
        <EventDetailAccordion />
      </Container>
    );
  }
}