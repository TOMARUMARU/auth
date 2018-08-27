import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: '¥AIzaSyCBwjeyIGepjzpeLL5ecgqN9u95P4K9N0Y',
      authDomain: 'authentication-1376d.firebaseapp.com',
      databaseURL: 'https://authentication-1376d.firebaseio.com',
      projectId: 'authentication-1376d',
      storageBucket: 'authentication-1376d.appspot.com',
      messagingSenderId: '13919341067'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
