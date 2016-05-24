import React, { Component } from 'react';
import { StyleSheet,View, Text,TouchableHighlight } from 'react-native';

export default class TouchableHighlightCase extends Component {
    constructor(props){
        super(props);
        this.state={
            log:true,
        };
    }
    PressText(){
        this.setState({
            log:!this.state.log,
        })
    }
    render() {
        return (
            <View >
                <View style={[styles.example,styles.button]}>
                    <TouchableHighlight onPress={this.PressText.bind(this)}>
                        <Text >click me</Text>
                    </TouchableHighlight>
                    </View>


                <Text style={styles.log}>{this.state.log?'success':'click the text'}</Text>
            </View>

        );
    }
}
const styles=StyleSheet.create({
    example:{
        flex:1,
        marginTop:100,
        marginLeft:80,
    },
    button:{
        width:60,
        height:40,
    },
    log:{
        color:'red',
        marginTop:300,
        marginLeft:80,
    }
});