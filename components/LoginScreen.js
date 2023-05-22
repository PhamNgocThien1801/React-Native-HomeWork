import { ScrollView, Text, StyleSheet, TextInput } from "react-native";

export default function LoginScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Wellcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue</Text>

      <TextInput style={styles.input} placeholder="UserName" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#FFFFFF",
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
  },
});
