import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Container from "../components/Container";
import InputName from "../components/InputName";
import BackButton from "../components/BackButton";

const InputScreen = ({ navigation }) => {
  return (
    <Container
      child={
        <View>
          <BackButton goBack={navigation} />
          <InputName />
        </View>
      }
    />
  );
};

export default InputScreen;

const styles = StyleSheet.create({});
