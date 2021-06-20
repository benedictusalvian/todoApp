import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Task from './Task';
import { useEffect } from 'react';
import Project from './Project';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';

function HomeScreen( {navigation} ) {

  const data = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  useEffect(( ) => {
    if (data.length === 0) {
        dispatch(fetchData());
    }
  }, [data]);

  const titles = data.map(({key, title}) => {
    return <Task key={key} text={title}/>
  })
  
  return (
    <View style={styles.container}>
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Projects</Text>
      <View style={styles.projects}>
        <Project key={1} text='Project 1' navigation={navigation}></Project>
        <Project key={2} text='Project 2' navigation={navigation}></Project>
      </View>
      <Text style={styles.sectionTitle}>Today</Text>
      <View style={styles.items}>
        {titles}
      </View>

    </View>
  </View>
  );
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
    projects: {
      marginTop: 30,
      flexDirection: 'row',
      marginBottom: 30,
    }
  });

  export default HomeScreen;