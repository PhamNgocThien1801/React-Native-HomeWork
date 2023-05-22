import * as React from "react";
import { Text, ScrollView, StyleSheet, TextInput } from "react-native";
export default function Wellcome() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Wellcome little lemon</Text>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear mor about your experience with us!
      </Text>
      <TextInput
        style={styles.inputBox}
        value={firstName}
        onChangeText={onChangeFirstName}
        placeholder={"FirstName"}
      ></TextInput>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
});
