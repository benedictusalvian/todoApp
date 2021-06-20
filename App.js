import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectScreen from './components/ProjectScreen';
import HomeScreen from './components/HomeScreen';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import allReducers from './redux/reducers';
import thunk from 'redux-thunk';
import { ScreenAnimation } from './animations/ScreenAnimation';
import { LogBox } from 'react-native';

const Stack = createStackNavigator();
const store = createStore(allReducers, applyMiddleware(thunk));
LogBox.ignoreAllLogs();

export default function App() {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={({ navigation }) => (
          <HomeScreen setPosition={setPosition} navigation={navigation}/>
        )}/>
        <Stack.Screen name="Project Title" component={ProjectScreen} options={{
          headerStyle: { backgroundColor: '#55BCF6' },
          headerTintColor: '#FFF',
          ...ScreenAnimation(position),
          }}/>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}