import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';

export default class LongPressCase extends Component{
    constructor(props){
        super(props);
        this.state={
            log:false,
        }
    }
    pressButton(){
        this.setState({
            log:!this.state.log,
        })
    }
    render(){
        return (
            <View>
            <View style={[styles.example]}>
                <TouchableHighlight onLongPress={this.pressButton.bind(this)}>
                    <Text style={styles.button}>LongPressCase</Text>
                    </TouchableHighlight>

            </View>
                <Text style={styles.log}>{this.state.log?'click':'unclick'}</Text>
                </View>

        );
    }
}
const styles=StyleSheet.create({
    example: {
        flex: 1,
        marginTop: 100,
        marginLeft: 80,
        width:200,
        height:100,
    },
    button:{

        backgroundColor:'red',
    },
    log:{
        width:60,
        height:50,
        marginTop:150,
        marginLeft:80,
        color:'red',
    }
});
