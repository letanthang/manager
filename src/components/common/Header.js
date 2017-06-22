// import library
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

// make a component
class Header extends Component {
    render() {
        console.log('Header render');
        return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{this.props.headerText}</Text>
        </View>
    );
    }
}
   

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3
    },
    textStyle: {
        fontSize: 20
    }
}); 


// make the component available to the other parts of the app
export { Header };
