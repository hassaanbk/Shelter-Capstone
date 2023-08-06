// Importing necessary modules from React and React Native
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Button,
  TouchableWithoutFeedback,
} from "react-native";

// Importing custom components
import Widget from "../components/Widget";

// Importing Firebase authentication module
import { auth } from "../firebase.js";

// Importing Ionicons from Expo vector icons
import { Ionicons } from "@expo/vector-icons";

// Function to filter data based on selected options
const handleFilterPress = (option, updateData, resetData, data) => {
  const backup = [...data];
  if (option === "Available") {
    var newData = backup.filter((r) => {
      if (r.UNOCCUPIED_BEDS > 0 || r.UNOCCUPIED_ROOMS > 0) return r;
    });
    updateData(newData);
  } else if (option === "Room-Based Capacity") {
    var newData = backup.filter((r) => {
      if (r.CAPACITY_TYPE === "Room Based Capacity") return r;
    });
    updateData(newData);
  } else if (option === "Bed-Based Capacity") {
    var newData = backup.filter((r) => {
      if (r.CAPACITY_TYPE === "Bed Based Capacity") return r;
    });
    updateData(newData);
  } else if (option === "All") {
    resetData();
  } else {
    if (!backup) {
      resetData();
    }
    var newData = data.filter((r) => {
      if (r.SECTOR === option) return r;
    });
    updateData(newData);
  }
};

// Dashboard component displays the main dashboard screen with shelter data
export default function Dashboard({ navigation }) {
  // State variables to hold data, backup data, loading status, and options
  const [data, setData] = useState([]);
  const [backup, setBackUp] = useState([]);
  const [loading, setLoading] = useState(true);
  const initialOptions = [
    "All",
    "Available",
    "Mixed Adult",
    "Families",
    "Youth",
    "Women",
    "Men",
    "Room-Based Capacity",
    "Bed-Based Capacity",
  ];
  const [options, setOptions] = useState(initialOptions);

  // Function to render each shelter item in the FlatList
  const renderItem = ({ item }) => (
    <Widget shelter={item} navigation={navigation} />
  );

  // Function to update the data state with filtered data
  const updateData = (filteredData) => {
    setData(filteredData);
  };

  // Function to reset the data state to the original backup data
  const resetData = () => {
    setData([...backup]);
  };

  // Function to handle user sign-out
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login"); // Redirect to the Login screen after sign-out
      })
      .catch((error) => alert(error.message));
  };

  // useEffect hook to fetch data and set navigation options
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => handleSignOut()} title="Logout" />
      ), // Header right button to trigger user sign-out
      headerLeft: () => (
        <TouchableWithoutFeedback
          onPress={() => {
            resetData();
          }}
          style={{ paddingRight: 30 }}
        >
          <Ionicons
            name="refresh-sharp"
            size={25}
            color="#007BFF"
            iconStyle={{ marginRight: 30 }}
          />
        </TouchableWithoutFeedback>
      ), // Header left button to reset data using the resetData function
      headerTitleAlign: "left", // Align the header title to the left
    });

    // Function to fetch data from the provided URL
    const fetchData = async () => {
      try {
        const csvResponse = await fetch(
          "https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/21c83b32-d5a8-4106-a54f-010dbe49f6f2/resource/f3521f5c-6252-4bc6-aa3c-5513cd49dd64/download/Daily%20shelter%20overnight%20occupancy.json"
        )
          .then((response) => response.text())
          .then((csvData) => {
            const jsonData = JSON.parse(csvData);
            const lastDay = jsonData[jsonData.length - 1].OCCUPANCY_DATE;
            const filteredData = jsonData.filter((r) => {
              const date = new Date(r.OCCUPANCY_DATE)
                .toISOString()
                .slice(0, 10);
              return date === lastDay;
            });
            setData(filteredData);
            setBackUp(filteredData);
          })
          .then(() => {
            setLoading(false); // Set loading status to false after data fetching is done
          })
          .catch((error) => {
            console.error(error.message);
          });
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [navigation]);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator size="small" color="#007bff" />
          <Text style={{ padding: 20 }}>This may take some time</Text>
        </View>
      ) : (
        <>
          {/* ScrollView for displaying filter buttons */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
          >
            {initialOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() =>
                  handleFilterPress(option, updateData, resetData, data)
                }
              >
                <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text>Email: {auth.currentUser?.email}</Text>
          {/* FlatList to display the shelter data */}
          <FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={renderItem}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerText: {
    paddingTop: 50,
    fontSize: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  scrollViewContent: {
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    backgroundColor: "#007BFF", // Set the button background color
    borderRadius: 3,
    marginRight: 8,
    height: 30,
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff", // Set the button text color
    fontWeight: "bold",
  },

  spinner: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
