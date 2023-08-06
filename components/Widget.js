// Importing React and necessary components from React Native
import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

// Widget component displays the shelter information in a card-like format
const Widget = ({ shelter, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate("Shelter", {
          name: shelter.ORGANIZATION_NAME,
          place: shelter,
        }) // Navigate to the "Shelter" screen passing the shelter name and data as parameters
      }
    >
      {/* Displaying shelter information */}
      <Text style={styles.headerText}>{shelter.PROGRAM_AREA}</Text>
      <Text style={styles.text}>
        Organization Name: {shelter.ORGANIZATION_NAME}
      </Text>
      <Text style={styles.text}>Shelter Group: {shelter.SHELTER_GROUP}</Text>
      <Text style={styles.text}>Program Model: {shelter.PROGRAM_MODEL}</Text>
      <Text style={styles.text}>
        Location: {shelter.LOCATION_NAME}
      </Text>
      <Text style={styles.text}>
        {shelter.UNOCCUPIED_ROOMS
          ? "Available Rooms: "
          : "Available Beds: "}{" "}
        {shelter.UNOCCUPIED_ROOMS
          ? shelter.UNOCCUPIED_ROOMS
          : shelter.UNOCCUPIED_BEDS}
      </Text>
    </TouchableOpacity>
  );
}

// Styles for the Widget component
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
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    marginBottom: 16,
    padding: 16,
    elevation: 2, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 }, // For iOS shadow
    shadowOpacity: 0.2, // For iOS shadow
    shadowRadius: 2, // For iOS shadow
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Widget;
