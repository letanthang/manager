//import
import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

//make comp
class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Name"
            placeholder="Jane"
          />
        </CardSection>

        <CardSection></CardSection>
        <CardSection></CardSection>
      </Card>
    );
  }
}

//avai
export default EmployeeCreate;
