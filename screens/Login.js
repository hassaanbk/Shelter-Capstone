import { TextInput, View, Text, StyleSheet, Pressable } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="default"
      />
      <Pressable style={styles.pressable}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </View>
        <View style={styles.buttonSecondary}>
          <Text style={styles.buttonText}>Register</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    width: 130,
    height: 50,
    backgroundColor: "green",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  pressable: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: 300,
    margin: 10
  },
  buttonSecondary: {
    width: 130,
    height: 50,
    backgroundColor: "grey",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
