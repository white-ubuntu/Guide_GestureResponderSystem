import React, { Component } from 'react';
import { StyleSheet,View, Text,TouchableHighlight } from 'react-native';

export default class ColorChange extends Component {
    constructor(props){
        super(props);
        this.state={
            textColor:'#9C27B0'
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
                    <TouchableHighlight onPress={this.PressText.bind(this)} onShowUnderlay={this.onPressIn.bind(this)} onHideUnderlay={this.onPressOut.bind(this)} underlayColor='gray' activeOpacity={1}>
                        <Text style={{fontSize: 10, color: this.state.textColor}}>click me</Text>
                    </TouchableHighlight>
                    </View>


                <Text style={styles.log}>{this.state.log?'success':'click the text'}</Text>
            </View>

        );
    }
    onPressIn(){
        this.setState({
            textColor:'red'
        });
    }
    onPressOut(){
        this.setState({
            textColor:'#9C27B0'
        });
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