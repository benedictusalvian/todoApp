import React from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Project = (props) => {

    const {text, navigation} = props

    return(
        <TouchableOpacity onPress={() => {navigation.navigate('Project Title');}}>
            <Animated.View>
                <View style={styles.item}>
                    <Text styles={styles.text}>{text}</Text>
                </View>
            </Animated.View>
            </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#55BCF6',
        width: 150,
        height: 150,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    text: {
        color: '#FFF',
    }
})

export default Project;