import { useNavigation } from "@react-navigation/core";
import { useState, useEffect } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Dashboard");
      }
    });
    return unsubscribe;
  }, []);

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
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, {backgroundColor: "#30d5c8"}]}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: "grey",
    padding: 20,
    margin: 10,
    borderRadius: 20,
  },
  header: {
    fontSize: 50,
    textAlign: "center",
    paddingVertical: 20,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#a5a5ed",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 5
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  inputContainer: {
    width: "80%",
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  }
});
