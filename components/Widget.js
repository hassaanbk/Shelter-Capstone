import { Text, View, StyleSheet } from 'react-native'

export default function Widget({ shelter }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{shelter.PROGRAM_AREA}</Text>
            <Text style={styles.text}>Organization Name: {shelter.ORGANIZATION_NAME}</Text>
            <Text style={styles.text}>Location Address: {shelter.LOCATION_ADDRESS}, {shelter.LOCATION_CITY} {shelter.LOCATION_POSTAL_CODE}</Text>
            <Text style={styles.text}>{shelter.UNOCCUPIED_ROOMS? "Available Rooms: " : "Available Beds: "} {shelter.UNOCCUPIED_ROOMS ? shelter.UNOCCUPIED_ROOMS : shelter.UNOCCUPIED_BEDS}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 350,
        height: 275,
        margin: 8,
        borderWidth: 1,
        borderRadius: 20,
    },
    headerText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20
    },
    text: {
        padding: 10
    }
})