import React from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props =>{
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this,props.keys)}>
        <View style={styles.itemList}><Text >{props.title}</Text>
        </View>
        </TouchableOpacity>
    );
};

const styles= StyleSheet.create({
    itemList: {
        padding: 10,
        borderColor: 'green',
        borderWidth: 1,
        backgroundColor: 'pink', margin: 5
      }
});

export default GoalItem;