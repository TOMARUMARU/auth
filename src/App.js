import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: '¥AIzaSyCBwjeyIGepjzpeLL5ecgqN9u95P4K9N0Y',
      authDomain: 'authentication-1376d.firebaseapp.com',
      databaseURL: 'https://authentication-1376d.firebaseio.com',
      projectId: 'authentication-1376d',
      storageBucket: 'authentication-1376d.appspot.com',
      messagingSenderId: '13919341067'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
