import React, { Component } from 'react';
import { Image } from 'react-native';

var bnLogo = require ('../../Assets/iOS/Resources/icons/Icon-167.png');

export default class Logo extends Component {
  render() {
    return (
      <Image
        style={{ height: 80, width: 350, flex: 1 }}
        source={bnLogo}
      />
    );
  }  
}