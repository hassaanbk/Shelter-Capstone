import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Widget from "../components/Widget";

export default function Dashboard() {
  const [data, setData] = useState([]);

  const renderItem = ({ item }) => <Widget shelter={item} />;
  const packageId = "21c83b32-d5a8-4106-a54f-010dbe49f6f2";

  useEffect(() => {
    const today = new Date();
    yesterday = new Date(today)
    yesterday.setDate(today.getDate() - 1);
    const yesterdayString = yesterday.toISOString().slice(0, 10).toString();
    
    const fetchData = async () => {
      try {
        const csvResponse = await fetch(
          "https://ckan0.cf.opendata.inter.prod-toronto.ca/dataset/21c83b32-d5a8-4106-a54f-010dbe49f6f2/resource/f3521f5c-6252-4bc6-aa3c-5513cd49dd64/download/Daily%20shelter%20overnight%20occupancy.json"
        )
          .then((response) => response.text())
          .then((csvData) => {
            const jsonData = JSON.parse(csvData);
            const lastDay = jsonData[jsonData.length - 1].OCCUPANCY_DATE;
            console.log(lastDay)
            const filteredData = jsonData.filter((r) => {
              const date = new Date(r.OCCUPANCY_DATE).toISOString().slice(0, 10);
              return date === lastDay ;
            });
            setData(filteredData);
            
          })
          .catch((error) => {
            console.error(error.message);
          });
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
    console.log(data)
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Dashboard</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
      />
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
});
