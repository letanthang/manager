//import
import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

//make comp
class EmployeeEdit extends Component {
  state = { showModal: false }
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
  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcomming shift is on ${shift}`);
  }
  onAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }
  onDecline() {
    this.setState({ showModal: false });
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
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire this employee?
        </Confirm>
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
export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
