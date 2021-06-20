import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import Task from './Task';

function ProjectScreen({ navigation })
{
  const data = useSelector(state => state.tasks);

  const titles = data.map(({key, title}) => {
    return <Task key={key} text={title}/>
  })

    return(

        <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Tasks</Text>
          <View style={styles.items}>
            {titles}
          </View>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    tasksWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    items: {
      marginTop: 30,
    },
  });

export default ProjectScreen;