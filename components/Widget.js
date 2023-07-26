import { Text, View, StyleSheet } from 'react-native'

export default function Widget({ shelter }) {
    return (
        <View style={styles.cardContainer}>
            <Text style={styles.headerText}>{shelter.PROGRAM_AREA}</Text>
            <Text style={styles.text}>Organization Name: {shelter.ORGANIZATION_NAME}</Text>
            <Text style={styles.text}>Shelter Group: {shelter.SHELTER_GROUP}</Text>
            <Text style={styles.text}>Program Model: {shelter.PROGRAM_MODEL}</Text>
            <Text style={styles.text}>Address: {shelter.LOCATION_ADDRESS}, {shelter.LOCATION_CITY} {shelter.LOCATION_POSTAL_CODE}</Text>
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
    cardContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        marginBottom: 16,
        padding: 16,
        elevation: 2, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: { width: 0, height: 2 }, // For iOS shadow
        shadowOpacity: 0.2, // For iOS shadow
        shadowRadius: 2, // For iOS shadow
      },
    headerText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20
    },
    cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
    text: {
        padding: 10
    }
})