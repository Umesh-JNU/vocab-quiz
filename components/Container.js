import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Container = ({ child }) => {
  return <View style={styles.container}>{child}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%'
  },
});
