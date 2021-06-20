import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Task from './components/Task';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProjectScreen from './components/ProjectScreen';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { getData } from './API';
import Project from './components/Project';
import HomeScreen from './components/HomeScreen';

  // const fadeAnim = useRef(new Animated.Value(0)).current
  // const opacityValue = useRef(new Animated.Value(1)).current
  // const translateYValue = useRef(new Animated.Value(0)).current
  // const animation = new Animated.Value(0);
  // const inputRange = [0, 1];
  // const outputRange = [1, 0.8];
  // const scale = animation.interpolate({inputRange, outputRange});

  // const onPressIn = () => {
  //   Animated.spring(animation, {
  //     toValue: 10,
  //     useNativeDriver: true,
  //   }).start();
  // };
  // const onPressOut = () => {
  //   Animated.spring(animation, {
  //     toValue: 0,
  //     useNativeDriver: true,
  //   }).start();
  // };
  // const show = () => {
  //   // ...
  //   Animated.parallel([
  //     Animated.timing(opacityValue, { toValue: 1, duration: 1000 }),
  //     Animated.timing(translateYValue, { toValue: 100, duration: 1000 }),
  //   ]).start();
  // }

  // const animatedStyle = {
  //   opacity: opacityValue,
  //   transform: [{ translateY: translateYValue }],
  // };

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Project Title" component={ProjectScreen} options={{headerStyle: { backgroundColor: '#55BCF6' }}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}