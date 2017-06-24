//import
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import { 
  emailChanged, 
  passwordChanged, 
  loginUser,
  logoutUser 
} from '../actions';

import { Card, CardSection, Input, Button, Spinner } from './common';

//make
class LoginForm extends Component {
  componentWillMount() {
    console.log('componentWillMount called.');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate called.');
    console.log(this.props.user);
    
    
    if (this.props.user) {
     Actions.main();
    }
  }
  componentDidUpdate() {
    console.log('componentDidlUpdate called.');
    console.log(this.props.user);

    if (this.props.user) {
     Actions.main();
    }
  }
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  onLogoutPress() {
    this.props.logoutUser();
  }
  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner size="small" />
      );
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }
  render() {
    if (this.props.user) {
      return (
        <Card>
          <CardSection>
            <Button onPress={this.onLogoutPress.bind(this)}>Logout</Button>
          </CardSection>
        </Card>
      );
    }
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="user@mail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input 
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'red' }}>
          {this.props.error}
        </Text>
        </View>
        
          
        <CardSection>
          {this.renderButton()}  
        </CardSection>

      </Card>
    );
  }
}
const mapStateToProps = ({ auth }) => {
  const { email, password, user, error, loading } = auth;
  return { email, password, user, error, loading };
};
//avai
export default connect(mapStateToProps, 
{ emailChanged, passwordChanged, loginUser, logoutUser })(LoginForm);
