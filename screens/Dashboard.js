import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/core'
import {
  View,
  Text,
  StyleSheet,
  FlatList, TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Button
} from "react-native";
import Widget from "../components/Widget";
import { auth } from '../firebase.js'

export default function Dashboard({ navigation }) {
  const [data, setData] = useState([]);
  const [backup, setBackUp] = useState([]);
  const [loading, setLoading] = useState(true);
  const options = ["All", "Available"];

  const renderItem = ({ item }) => <Widget shelter={item} navigation={navigation}/>;
  //const navigation = useNavigation();

  const handleSignOut = () => {
    auth.signOut().then(() => {navigation.replace("Login")}).catch(error => alert(error.message))
  }

  useEffect(() => {
    const today = new Date();
    yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const yesterdayString = yesterday.toISOString().slice(0, 10).toString();

    navigation.setOptions({
        headerRight: () => (
            <Button onPress={() => handleSignOut()} title="Logout"/>
        ),
    })

    const fetchData = async () => {
      try {
        const csvResponse = await fetch(
          "https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/21c83b32-d5a8-4106-a54f-010dbe49f6f2/resource/f3521f5c-6252-4bc6-aa3c-5513cd49dd64/download/Daily%20shelter%20overnight%20occupancy.json"
        )
          .then((response) => response.text())
          .then((csvData) => {
            const jsonData = JSON.parse(csvData);
            const lastDay = jsonData[jsonData.length - 1].OCCUPANCY_DATE;
            //console.log(lastDay)
            const filteredData = jsonData.filter((r) => {
              const date = new Date(r.OCCUPANCY_DATE)
                .toISOString()
                .slice(0, 10);
              return date === lastDay;
            });
            setData(filteredData);
          })
          .then(() => {
            setLoading(false)
          })
          .catch((error) => {
            console.error(error.message);
          });
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
    //console.log(data)
  }, []);

  const handleFilterPress = (option) => {
    if (option === "Available") {
      var newData = data.filter((r) => {
        if (r.UNOCCUPIED_BEDS > 0 || r.UNOCCUPIED_ROOMS > 0) return r;
      });
      setBackUp(data);
      setData(newData);
    } else setData(backup);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText} >Dashboard</Text> */}
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator size="small" color="#007bff" />
        </View>
      ) : (
        <>
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollViewContent}
          >
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => handleFilterPress(option)}
              >
                <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text>Email: {auth.currentUser?.email}</Text>
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
    fontWeight: '600'
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
    justifyContent: "center"
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
