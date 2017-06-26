//import libs
import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

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
  dataSource = {};
  
  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }); 
    this.dataSource = ds.cloneWithRows(employees);
  }
  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    //console.log(this.props.employees);
    console.log('Employ list render. Datasource =');
    console.log(this.dataSource);
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
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
