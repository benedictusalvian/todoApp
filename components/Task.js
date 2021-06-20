import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

export const Task = (props) => {

    const {text} = props

    return(
            <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.circle}></View>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            </View>
    )
}

export const StepbyStepFade = ({ step, children }) => {

    const opacity = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        delay: 400 + 100 * step,
      }).start();
    }, [opacity]);

    return (
        <Animated.View style={{opacity: opacity}}>
          {children}
        </Animated.View>
      );
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    circle: {
        width: 20,
        height: 20,
        backgroundColor: '#FFF',
        opacity: 0.4,
        borderWidth: 3,
        borderRadius: 15,
        marginRight: 15,
        borderColor: '#55BCF6'
    },
    itemText: {
        maxWidth: '80%',
    },
})

export default Task;
