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
import Widget from "../components/Widget";
import { auth } from "../firebase.js";

//Icon
import { Ionicons } from '@expo/vector-icons'

const getUniqueSectors = (obj) => {
  return obj.reduce((acc, current) => {
      if(!acc.includes(current.SECTOR))
          acc.push(current.SECTOR)
      return acc;
  }, [])
}

const handleFilterPress = (option, updateData, resetData, data) => {
  const backup = data
  if (option === "Available") {
    var newData = backup.filter((r) => {
      if (r.UNOCCUPIED_BEDS > 0 || r.UNOCCUPIED_ROOMS > 0) return r;
    });
    updateData(newData);
  } else if (option === "Room-Based Capcity") {
    var newData = backup.filter((r) => {
      if (r.CAPACITY_TYPE === "Room Based Capacity") return r;
    });
    updateData(newData);
  } else if (option === "Bed-Based Capacity") {
    var newData = backup.filter((r) => {
      if (r.CAPACITY_TYPE === "Bed Based Capacity") return r;
    });
    updateData(newData);
  } else if(option === "All"){
    resetData();
  }
    
  else{

      var newData = backup.filter(r => {
          if(r.SECTOR === option)
              return r;
      })
      updateData(newData);
  }
};


export default function Dashboard({ navigation }) {
  const [data, setData] = useState([]);
  const [backup, setBackUp] = useState([]);
  const [loading, setLoading] = useState(true);
  const initailOptions = [
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
  const [options, setOptions] = useState(initailOptions)

  const renderItem = ({ item }) => (
    <Widget shelter={item} navigation={navigation} />
  );
  //const navigation = useNavigation();
  const updateData = (filteredData) => {
    setData(filteredData)
  }
  const resetData = () => {
    setData(backup)
  }

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => handleSignOut()} title="Logout" />
      ),
      headerLeft: () => (
        <TouchableWithoutFeedback onPress={() => resetData()} >
          <Ionicons  name="refresh-sharp" size={25} color="#007BFF" iconStyle={{marginRight: 30}}/>
        </TouchableWithoutFeedback>
      ),
      headerTitleAlign: 'left'
    });
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
            setBackUp(filteredData);
          })
          .then(() => {
            setLoading(false);
            const uniqueSectors = getUniqueSectors(data)
            const updateOptions = [...initailOptions, ...uniqueSectors]
            setOptions(updateOptions)
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
  }, [navigation]);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator size="small" color="#007bff" />
          <Text style={{padding: 20}}>This may take some time</Text>
        </View>
      ) : (
        <>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollViewContent}
          >
            {initailOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.button}
                onPress={() => handleFilterPress(option, updateData, resetData, data)}
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
