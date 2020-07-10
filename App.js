
import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: goalTitle }]);
    setisAddMode(false);
  };
  const [isAddMode, setisAddMode] = useState(false);

  const removeGoalHandler = goalkey =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal)=>goal.key !== goalkey);
    })
  };
  const cancelGoalAdditionHandler =()=>{
    setisAddMode(false);
  };
  return (
    <View style={styles.screen} >
      <Button title='Add New Goal' onPress={()=>setisAddMode(true)}/>
      <GoalInput onCancel={cancelGoalAdditionHandler} visible={isAddMode} onAddGoal={addGoalHandler} />
      <FlatList data={courseGoals} renderItem={itemData => <GoalItem keys={itemData.item.key} onDelete={removeGoalHandler} title={itemData.item.value} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
