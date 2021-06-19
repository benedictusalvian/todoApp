import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

function ProjectScreen({ navigation })
{
    
    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.circle}></View>
                <Text style={styles.itemText}>ngehe</Text>
            </View>
        </View>
    )
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

export default ProjectScreen;