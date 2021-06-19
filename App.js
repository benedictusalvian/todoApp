import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Task from './components/Task';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectScreen from './components/ProjectScreen';
import { useState } from 'react';
import { useEffect } from 'react';
import { getData } from './API';

function HomeScreen( {navigation} ) {

  // const data = ["Yo Mama", "Etc"]

  const [data, setData] = useState([]);

  useEffect(() => {
      const fetchData = async() => {
          const data = await getData();
          setData(data);
      };

    if (data.length === 0) {
        fetchData(data);
    }
  }, [data]);

  const titles = data.map(({key, title}) => {
    return <TouchableOpacity key={key} onPress={() => navigation.navigate('Project')}>
            <Task text={title}/>
          </TouchableOpacity>
  })
  
  return (
    <View style={styles.container}>
    <View style={styles.tasksWrapper}>
      <Text style={styles.sectionTitle}>Today's tasks</Text>

      <View style={styles.items}>
        {titles}
      </View>

    </View>
  </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Project" component={ProjectScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
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
});
