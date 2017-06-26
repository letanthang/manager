//import
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';
import EmployeeForm from './EmployeeForm';

//make comp
class EmployeeCreate extends Component {
  componentWillMount() {
    console.log('EmployeeCreate mount');
  }
  componentWillUnmount() {
    console.log('EmployeeCreate unmount');
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}
// style={{ flexDirection: 'column' }}
//mapStateToProps
const mapStateToProps = (state) => {
  console.log('employeeCreate state');
  console.log(state.employeeForm);
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};
//avai
export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
