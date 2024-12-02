import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Fotter = () => {

    return (
        <View style={styles.fotter}>
            <Text>Footer</Text>
        </View>
    )
}
export default Fotter

const styles = StyleSheet.create({
    fotter: {
        backgroundColor: 'lightgreen',
        width: '100%',
        height: '33%'
    }
})