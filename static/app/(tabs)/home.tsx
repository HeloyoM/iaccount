import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SoftwareNameHeader from '../components/Header/SoftwareNameHeader'

const home = () => {

    return (
        <View>
            <SoftwareNameHeader/>
        </View>
    )
}
export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})