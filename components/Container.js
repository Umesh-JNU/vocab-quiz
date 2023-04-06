import { StyleSheet, Text, View } from "react-native";
import React from "react";
// demonstate different ways of using styling
// First import the stylesheet
import ExStyle from "../styles/style";

const Container = ({ child }) => {
  return (
    <View
      style={[styles.container, ExStyle.bg, { padding: 16 }]}
    >
      {child}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
