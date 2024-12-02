import { Colors } from '@/app/constants/Colors'
import { View, Text, StyleSheet, useColorScheme } from 'react-native'

const SoftwareNameHeader = () => {
    const colorSchem = useColorScheme()

    return (
        <View style={style.container}>
            <Text style={[style.header, { color: colorSchem == "light" ? Colors.light : Colors.dark }]}>I-ACCOUNT</Text>
        </View>
    )
}
export default SoftwareNameHeader

const style = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'linear-gradient(45deg, #0d3b66, #1c8b8f)',
        paddingTop: 8,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 32,
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    }
})