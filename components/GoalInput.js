import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };
    const addGoalHandler=() =>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
        
    };
    const onCancelHandler=()=>{
        props.onCancel();
        setEnteredGoal('');
    };
    
    return (
        <Modal visible={props.visible} animationType={"slide"}>
        <View style={styling.container}>
            <TextInput 
            placeholder="Course Goals"
             onChangeText={goalInputHandler} 
             value={enteredGoal} 
             style={styling.input} />
             <View style={styling.buttonContainer}>
             <Button title='Cancel ' color='red' onPress={onCancelHandler}/>
            <Button title="Add " onPress = {addGoalHandler} />
            </View>
        </View>
        </Modal>
    );
};

const styling = StyleSheet.create({
    container: {
        flex:1, justifyContent: "center", alignItems: "center"
    },
    input: {
        width: 200, borderWidth: 1, paddingLeft: 5,marginBottom:5

    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:150


    }
});

export default GoalInput;