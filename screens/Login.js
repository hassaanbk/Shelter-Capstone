// Importing necessary modules from React and React Native
import { useState, useEffect } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";

// Importing Firebase authentication module
import { auth } from "../firebase";

// Importing MaterialCommunityIcons from Expo vector icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Login component handles user login and registration
const Login = ({ onLogin, navigation }) => {
  // State variables to hold email and password input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // useEffect hook to check if the user is already logged in and redirect to Dashboard
  useEffect(() => {
    // Adding an authentication state change listener
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Dashboard"); // Redirect to Dashboard screen if the user is logged in
      }
    });
    // Clean up the listener when the component unmounts
    return unsubscribe;
  }, [navigation]);

  // Function to handle user registration
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password) // Firebase function for creating a user
      .catch((error) => alert(error.message)); // Alert an error if registration fails
  };

  // Function to handle user login
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password) // Firebase function for user login
      .catch((error) => alert(error.message)); // Alert an error if login fails
  };

  return (
    // A container that automatically avoids the keyboard on input fields
    <KeyboardAvoidingView style={styles.container} behaviour="padding">
      <View style={styles.inputContainer}>
        {/* App Icon */}
        <MaterialCommunityIcons
          name="home-roof"
          size={200}
          color="#007BFF"
          iconStyle={{ padding: 0, margin: 0 }}
        />
        {/* Login Header */}
        <Text style={styles.header}>Login</Text>
        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)} // Update email state on text change
          textContentType="emailAddress"
        />
        {/* Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry // Hide the entered text as a password
          value={password}
          onChangeText={(text) => setPassword(text)} // Update password state on text change
          textContentType="password"
        />
      </View>
      {/* Buttons Container */}
      <View style={styles.buttonContainer}>
        {/* Login Button */}
        <TouchableOpacity onPress={handleLogin} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Login</Text>
        </TouchableOpacity>
        {/* Register Button */}
        <TouchableOpacity onPress={handleSignUp} style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

// Styles for the Login component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "grey",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  header: {
    fontSize: 50,
    textAlign: "center",
    paddingBottom: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  primaryButton: {
    backgroundColor: "#007BFF", // Blue color for primary button
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    width: "60%",
  },
  primaryButtonText: {
    color: "#FFFFFF", // White text for primary button
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#007BFF", // Blue border color for secondary button
    paddingVertical: 15,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    width: "60%",
  },
  secondaryButtonText: {
    color: "#007BFF", // Blue text for secondary button
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;
