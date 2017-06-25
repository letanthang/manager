//import libs
import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

// make comp
class EmployeeList extends Component {
  componentWillMount() {
    console.log('Will Fetch employees');
    this.props.employeesFetch();   

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // this.props still here -> the old set of props
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }); 
    this.DataSource = ds.cloneWithRows(employees);
  }

  render() {
    console.log(this.props.employees);
    return (
      <View>
        <Text>Employee 1</Text>
        <Text>Employee 1</Text>
        <Text>Employee 1</Text>
        <Text>Employee 1</Text>
        <Text>Employee 1</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ employeeList }) => {
  const employees = _.map(employeeList, (val, uid) => {
    return { ...val, uid };
  });
  return { employees };
};

// make avai
export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
