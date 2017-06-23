import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCzAwrixWueQb9Jx6Egwl319pDsUGPIOLs',
      authDomain: 'project--6873070059517609782.firebaseapp.com',
      databaseURL: 'https://project--6873070059517609782.firebaseio.com',
      projectId: 'project--6873070059517609782',
      storageBucket: 'project--6873070059517609782.appspot.com',
      messagingSenderId: '832897490799'
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View>
          <Header headerText="Login" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
