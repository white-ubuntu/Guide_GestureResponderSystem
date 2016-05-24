import React, { Component } from 'react';
import { StyleSheet,View, Text } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Guide extends Component {
    render() {
        return (
            <View style={styles.guide}>
                <Text style={styles.item} onPress={Actions.touchableHighlightCase}>touchableHighlightCase!</Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    guide:{
        flex:1,
        marginTop:100,
        marginLeft:80,
    },
    item:{
        color:'blue',
    }
})