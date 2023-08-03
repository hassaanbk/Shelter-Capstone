import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

//Libraries
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Components
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import Shelter from "./screens/Shelter";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={() => ({
            headerTitle: "Homeless Shelter",
          })}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={({ navigation, route }) => ({
            headerRight: () => <Button title="Logout" />,
          })}
        />
        <Stack.Screen
          name="Shelter"
          component={Shelter}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
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

/* 
<Tab.Navigator>
        {isLoggedIn ? (
          <>
            <Tab.Screen
              name='Dashboard'
              options={({ route }) => ({
                tabBarIcon: () => (
                  <MaterialCommunityIcons name='view-dashboard' size={26} />
                ),
              })}
            >
              {(props) => (
                // Pass the handleLogout function as a parameter to Dashboard component
                <Dashboard {...props} handleLogout={() => setLoggedIn(false)} />
              )}
            </Tab.Screen>
            <Tab.Screen
              name='LogOut'
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name='logout' size={26} />
                ),
              }}
            >
              {(props) => (
                <Login {...props} handleLogout={() => setLoggedIn(false)}/>
              )}
            </Tab.Screen>
          </>
        ) : (
          <Tab.Screen   
            name='Login' 
            component={()=> <Login onLogin={handleLogin}/>} 
            options={{
              tabBarIcon: () => (
                <MaterialCommunityIcons name='login' size={26} />
              )
            }}
          />
        )}
      </Tab.Navigator>
*/
