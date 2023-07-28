import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

//Libraries
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//Components
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";

//const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //   <Tab.Navigator>
    //   <Tab.Screen
    //       name='Login'
    //       component={Login}
    //       options={{
    //         tabBarIcon: () => (
    //           <MaterialCommunityIcons name='login' size={26} />
    //         )
    //       }}
    //     />
    //     <Tab.Screen
    //       name='Dashboard'
    //       component={Dashboard}
    //       options={{
    //         tabBarIcon: () => (
    //           <MaterialCommunityIcons name="view-dashboard" size={26} />
    //         )
    //       }}
    //     />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
