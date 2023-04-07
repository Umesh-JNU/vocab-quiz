import { StyleSheet, Text, View } from "react-native";
import React from "react";
// demonstate different ways of using styling
// First import the stylesheet
import ExStyle from "../styles/style";
import { StatusBar, Platform } from "react-native";

// using status bar and platform
const Container = ({ child }) => {
  return (
    <View style={[styles.container, ExStyle.bg, { padding: 16 }]}>
      {/* Use StatusBar Component */}
      <StatusBar backgroundColor="rgba(0,0,0,0.5)" />
      {Platform.OS === "android" && (
        <Text>
          {Platform.OS} {Platform.Version}
           {/* {JSON.stringify(Platform)} */}
        </Text>
      )}
      {child}
    </View>
  );
};

export default Container;

// using platform condition in style
const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: Platform.OS === "android" ? 0 : 10
  },
});
