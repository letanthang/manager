//import
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { 
  emailChanged, 
  passwordChanged, 
  loginUser 
} from '../actions';

import { Card, CardSection, Input, Button, Spinner } from './common';

//make
class LoginForm extends Component {
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
            <Button>Logout</Button>
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
        <Text style={{ color: 'red' }}>
          {this.props.error}
        </Text>
          
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
{ emailChanged, passwordChanged, loginUser })(LoginForm);
