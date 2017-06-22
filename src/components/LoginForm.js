//import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

//make
class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="user@mail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input 
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>
          
        <CardSection>
          <Button>
            Login
          </Button>  
        </CardSection>

      </Card>
    );
  }
}

//avai
export default connect(null, { emailChanged })(LoginForm);
