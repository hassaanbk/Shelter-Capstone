
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
  Platform,
} from "react-native";

export default function Shelter({ route }) {
  const shelter = route.params.place;
  const address = `${shelter.LOCATION_ADDRESS}, ${shelter.LOCATION_CITY} ${shelter.LOCATION_POSTAL_CODE} ${shelter.LOCATION_PROVINCE}`;
  return (
    <View style={styles.container}>
      <Text style={styles.programName}>Program Name: {shelter.PROGRAM_NAME}</Text>
      <Text style={styles.shelterGroup}>Shelter Group: {shelter.SHELTER_GROUP}</Text>
      <Text style={styles.locationName}>Location: {shelter.LOCATION_NAME}</Text>
      <Text style={styles.sector}>Sector: {shelter.SECTOR}</Text>
      <Text style={styles.programModel}>Program Model: {shelter.PROGRAM_MODEL}</Text>
      <Text style={styles.capacityType}>Capacity Type: {shelter.CAPACITY_TYPE}</Text>
      <Text style={styles.unoccupied}>
        {shelter.UNOCCUPIED_BEDS
          ? "Available Beds: " + shelter.UNOCCUPIED_BEDS
          : "Available Rooms: " + shelter.UNOCCUPIED_ROOMS}
      </Text>
      <TouchableOpacity onPress={() => {
        const url = Platform.OS ==='ios' ? `https://maps.apple.com/?q=${encodeURIComponent(address)}` : `https://maps.google.com/?q=${encodeURIComponent(address)}`
        Linking.canOpenURL(url)
            .then(supported => {
                if(!supported)
                    alert(`Can't handle url just copy bro: ${url}`)
                else
                    return Linking.openURL(url)
            })
            .catch(error => {
                alert(error)
            })
      }}>
        <Text style={styles.address}>{address}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f0f2f5", // Light gray background color
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
  },
  programName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  shelterGroup: {
    fontSize: 16,
    color: "#385898", // Facebook blue color
    marginBottom: 8,
  },
  locationName: {
    fontSize: 16,
    marginBottom: 8,
  },
  sector: {
    fontSize: 14,
    color: "#90949c", // Light gray color for sector text
    marginBottom: 8,
  },
  programModel: {
    fontSize: 14,
    color: "#90949c", // Light gray color for program model text
    marginBottom: 8,
  },
  capacityType: {
    fontSize: 14,
    color: "#90949c", // Light gray color for capacity type text
    marginBottom: 8,
  },
  unoccupied: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  address: {
    fontSize: 14,
    color: "blue", // Hyperlink blue color for address text
    textDecorationLine: "underline"
  },
});

const obj = {
  _id: 26699,
  OCCUPANCY_DATE: "2023-07-17",
  ORGANIZATION_ID: "38",
  ORGANIZATION_NAME: "YouthLink",
  SHELTER_ID: "81",
  SHELTER_GROUP: "YouthLink Shelter",
  LOCATION_ID: "1147",
  LOCATION_NAME: "YouthLink ",
  LOCATION_ADDRESS: "747 Warden Ave",
  LOCATION_POSTAL_CODE: "M1L 4A1",
  LOCATION_CITY: "Scarborough",
  LOCATION_PROVINCE: "ON",
  PROGRAM_ID: "14911",
  PROGRAM_NAME: "YouthLink Transitional Program",
  SECTOR: "Youth",
  PROGRAM_MODEL: "Transitional",
  OVERNIGHT_SERVICE_TYPE: "Shelter",
  PROGRAM_AREA: "Base Shelter and Overnight Services System",
  SERVICE_USER_COUNT: "38",
  CAPACITY_TYPE: "Bed Based Capacity",
  CAPACITY_ACTUAL_BED: "38",
  CAPACITY_FUNDING_BED: "40",
  OCCUPIED_BEDS: "38",
  UNOCCUPIED_BEDS: "0",
  UNAVAILABLE_BEDS: "2",
  CAPACITY_ACTUAL_ROOM: "",
  CAPACITY_FUNDING_ROOM: "",
  OCCUPIED_ROOMS: "",
  UNOCCUPIED_ROOMS: "",
  UNAVAILABLE_ROOMS: "",
  OCCUPANCY_RATE_BEDS: "100",
  OCCUPANCY_RATE_ROOMS: "",
};
