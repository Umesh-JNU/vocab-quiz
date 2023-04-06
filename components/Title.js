import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({titleText}) => {
  return (
    <View>
      <Text style={styles.title}>{titleText}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
});
