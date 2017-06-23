//import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  emailChanged, 
  passwordChanged, 
  loginUser 
} from '../actions';

import { Card, CardSection, Input, Button } from './common';

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
          
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Login
          </Button>  
        </CardSection>

      </Card>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user
  };
};
//avai
export default connect(mapStateToProps, 
{ emailChanged, passwordChanged, loginUser })(LoginForm);
