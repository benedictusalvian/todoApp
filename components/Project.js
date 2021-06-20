import React from 'react';
import { Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// const position = useSelector(state => state.position);
// const dispatch = useDispatch();

const Project = (props) => {

    const {text, navigation, setPosition} = props

    return(
            <TouchableOpacity onPress={({ nativeEvent: { pageX, pageY } }) => {
                setPosition({ x: pageX, y: pageY, });
                navigation.navigate("Project Title");
            }}>
                    <View style={styles.item}>
                        <Text styles={styles.text}>{text}</Text>
                    </View>
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
