import { useState, useEffect } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { auth } from "../firebase";

const Login = ({ onLogin, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Dashboard");
      }
    });
    return unsubscribe;
  }, [navigation]);

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      // testing only
      // .then(userCredentials => {
      //   const user = userCredentials.user;
      //   console.log('Registered: ', user.email);
      // })
      .catch((error) => alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      // testing only
      // .then(userCredentials => {
      //   const user = userCredentials.user;
      //   console.log('Login: ', user.email);
      // })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behaviour="padding">
      <View style={styles.inputContainer}>
        <Text style={styles.header}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          keyboardType="default"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          textContentType="password"
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp} style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

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
    paddingVertical: 20,
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#a5a5ed",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
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
