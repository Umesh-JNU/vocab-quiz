import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Container from "../components/Container";
import BackButton from "../components/BackButton";

const FormScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    navigation.navigate("DataScreen", { name, email, password });
  };

  return (
    <Container
      child={
        <View>
          <BackButton goBack={navigation} />

          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(t) => setName(t)}
            placeholder="Enter your name"
            value={name}
          />

          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(t) => setEmail(t)}
            placeholder="Email"
            value={email}
          />

          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(t) => setPassword(t)}
            placeholder="Password"
            value={password}
            secureTextEntry={true}
          />

          <Button title="Submit" onPress={() => submitHandler()} color="green"/>
        </View>
      }
    />
  );
};

export default FormScreen;

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
