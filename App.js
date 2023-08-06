// Importing necessary modules from React and React Native
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";

// Importing navigation-related libraries
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importing icons and components
import { useState } from "react";
import Shelter from "./screens/Shelter";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";

// Creating navigator objects
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

// App component is the main component that renders the app UI and handles navigation.
export default function App() {
  // State to track whether the user is logged in or not
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Function to handle user login
  handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    // NavigationContainer wraps the entire app and manages navigation state
    <NavigationContainer>
      {/* StackNavigator to handle screen transitions */}
      <Stack.Navigator>
        {/* Login screen */}
        <Stack.Screen
          name="Login"
          component={Login}
          options={() => ({
            headerTitle: "Homeless Shelter", // Custom header title for the Login screen
          })}
        />
        {/* Dashboard screen */}
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={({ navigation, route }) => ({
            headerRight: () => <Button title="Logout" />, // Custom header button for logout
          })}
        />
        {/* Shelter screen */}
        <Stack.Screen
          name="Shelter"
          component={Shelter}
          options={({ route }) => ({ title: route.params.name })} // Custom header title based on route params
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles for the app components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
