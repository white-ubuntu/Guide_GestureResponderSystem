import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableHighlight,
} from 'react-native';

export default class FormInput extends Component{
    constructor(props){
        super(props);
        this.state={
            text:'姓名',
            log:'未输入',
        }
    }
    pressEvent(){
        this.refs.textInput.blur();
        this.setState({
            log:this.state.text
        });
    }
    changeEvent(event){
        this.setState({
           text:event.nativeEvent.text
        });
    }
    render(){
        return (
          <View style={styles.example}>
                <TextInput style={styles.input} ref="textInput"
                           onChange={this.changeEvent.bind(this)}
                           autoFocus={true}
                />
                <TouchableHighlight underlayColor="#E91E63" style={styles.addButton} onPress={this.pressEvent.bind(this)}>
                    <Text style={{textAlign:'center'}}>Add</Text>
                </TouchableHighlight>
              <Text style={{marginTop:10}}>{this.state.log}</Text>
          </View>
        );
    }
}

const styles=StyleSheet.create({
    example:{
        flex:1,
        marginTop:100,
        height:60,

    },
    input:{
      width:100,
        height:40,
    },
    addButton:{
        width:100,
        height:30,
        marginTop:10,
        borderRadius:10,
        backgroundColor:'#8BC34A',
        justifyContent:'center',
    }
});