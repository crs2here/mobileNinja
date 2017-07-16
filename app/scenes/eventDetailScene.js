import React, { Component } from 'react';
import { Container } from 'native-base';
import EventDetailAccordion from '../components/eventDetailAccordion'

export default class EventDetails extends Component {
  state = {
    foodCollapsed: true,
    notesCollapsed: true,
    sequenceCollapsed: true, 
  };

  render() {
    return (
      <Container>
        <EventDetailAccordion />
      </Container>
    );
  }
}