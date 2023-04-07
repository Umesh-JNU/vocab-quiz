import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Container from "../components/Container";
import Title from "../components/Title";

// to get parameters while using component as navigating screen use route props as below.
// to achieve this use navigation.navigate method like - navigation.navigate("Result", { score })
const Result = ({ navigation, route }) => {
  const { score } = route.params;
  return (
    <Container
      child={
        <>
          <Title titleText="Result" />
          <View style={styles.bannerContainer}>
            <Image
              source={require("../assets/img/result.jpg")}
              style={styles.banner}
            />
            <View style={styles.resultBox}>
              <Text style={styles.resultText}>{score} / 50</Text>
              {/* <Text style={styles.resultText}>50 / 50</Text> */}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
        </>
      }
    />
  );
};

export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "600",
  },
  resultBox: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A759F",
    padding: 15,
    marginTop: 15,
    borderWidth: 10,
    borderColor: "orange",
    borderRadius: 200,
    width: 220,
    height: 220,
  },
  resultText: {
    color: "orange",
    fontSize: 50,
    fontWeight: "500",
  },
});
