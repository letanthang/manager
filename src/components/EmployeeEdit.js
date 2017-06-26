//import
import _ from 'lodash';
import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeSave } from '../actions';
import EmployeeForm from './EmployeeForm';

//make comp
class EmployeeEdit extends Component {
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }
  onButtonPress() {
    const { name, phone, shift, employee } = this.props;
    console.log(name, phone, shift, employee.uid);
    this.props.employeeSave({ name, phone, shift: shift || 'Monday', uid: employee.uid });
  }
  render() {
    console.log(this.props.employee);
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save change
          </Button>
        </CardSection>
      </Card>
    );
  }
}
// style={{ flexDirection: 'column' }}
//mapStateToProps
const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};
//avai
export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);
