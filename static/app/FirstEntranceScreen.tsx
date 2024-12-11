import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SoftwareNameHeader from '../components/Header/SoftwareNameHeader'
import { Button, TextInput } from 'react-native-paper'
import { register } from '../api/user'

const FirstEntranceScreen = () => {
    const [user, setUser] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [rePasword, setrePasword] = React.useState("");
    const [validCredentials, setIsValidCredentials] = React.useState<boolean>(false);

    useEffect(() => {
        if (user && matchPasswords()) setIsValidCredentials(prev => true)
    }, [user, password, rePasword])

    const matchPasswords = (): boolean => {
        if (!password.trim() || !rePasword.trim()) return false

        return password.trim() === rePasword.trim()
    }

    const submit = () => {
        const userCredentials = { username: user, password }

        register(userCredentials)
    }

    return (
        <View style={styles.container}>

            <SoftwareNameHeader />

            <Text style={styles.explain}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>

            <View>
                <TextInput
                    style={styles.textField}
                    label="Email/Username"
                    value={user}
                    onChangeText={text => setUser(text)}
                />
                <TextInput
                    style={styles.textField}
                    label="password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
                <TextInput
                    style={styles.textField}
                    label="repeat password"
                    value={rePasword}
                    onChangeText={text => setrePasword(text)}
                />

            </View>

            {validCredentials && <Button onPress={submit} style={styles.saveBtn}>Join</Button>}

        </View>
    )
}
export default FirstEntranceScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    explain: {
        height: '45%',
        margin: 14,
        textAlign: 'center'
    },
    textField: {
        margin: 5.5,
    },
    saveBtn: {
        // position: 'relative',
        // bottom: 0
    }
})