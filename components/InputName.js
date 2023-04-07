import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

// demonstrate how to take input
const InputName = () => {
  const [userName, setUserName] = useState("");
  return (
    <View>
        <Text style={styles.inputLabel}>Your Name: {userName}</Text>
      <Text style={styles.inputLabel}>Name</Text>
      {/* use TextInput component for input text and for specific type use keyboardType */}
      {/* numeric type */}
      <TextInput
        style={styles.textInput}
        placeholder="Age"
        keyboardType="numeric"
        onChangeText={(txt) => setUserName(txt)}
      />
      {/* search type */}
      <TextInput
        style={styles.textInput}
        placeholder="Age"
        // keyboardType="search"
        onChangeText={(txt) => setUserName(txt)}
      />
    </View>
  );
};

export default InputName;

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    color: "blue",
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
    padding: 16,
  },
  inputLabel: {
    fontSize: 25,
    fontWeight: 500,
  },
});
