import React from 'react'
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native'

const Introduction = () => {

    return (
        <View style={styles.container}>
            <Text >Hello world</Text>
            <Link href={'/FirstEntranceScreen'} style={styles.button}>First</Link>
        </View>
    )
}
export default Introduction

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '80%'
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#000',
    }
})