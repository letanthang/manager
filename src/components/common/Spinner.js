//import libs
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

// make comp
const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};
//style
const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
//make it avai
export { Spinner };
