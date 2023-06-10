import { Text, View, StyleSheet } from 'react-native'

export default function Widget({ shelter }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{shelter.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 20,
        width: 400,
        height: 300,
        margin: 10
    },
    headerText: {
        textAlign: 'center',
        padding: 20
    }
})