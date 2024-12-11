import React from 'react'
import { StyleSheet, View } from 'react-native'
import SoftwareNameHeader from '../../components/Header/SoftwareNameHeader'
import { Status } from '../../components/Status'

const home = () => {
    return (
        <View style={styles.container}>
            <SoftwareNameHeader />

            <Status />
        </View>
    )
}
export default home

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})