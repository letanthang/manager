//import
import React from 'react';
import { TextInput, View, Text } from 'react-native'
//make
const Input = ({ label, onChangeText, value, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        value={value} 
        onChangeText={onChangeText}
        style={styles.inputStyle} 
      />
    </View>
  );
};
//style
const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    flex: 1,
    marginLeft: 20
  }
};
//avail
export { Input };
