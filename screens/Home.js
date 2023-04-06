import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Container from "../components/Container";
import Title from "../components/Title";
import InputName from "../components/InputName";

// navigation props comes by defualt when we use the component as routing screens
const Home = ({ navigation }) => {
  return (
    <Container
      child={
        <>
          <Title titleText="QuizApp" />
          <View style={styles.bannerContainer}>
            <Image
              // to use static image use require method
              source={require("../assets/img/banner.jpg")}
              style={styles.banner}
            />
          </View>
          {/* TouchableOpacity component is similar to view but having animation on touch. */}
          <TouchableOpacity
            // onPress is similar to onClick function
            // navigation.navigate helps to move from one screen to another
            onPress={() => navigation.navigate("Quiz")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("InputScreen")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>InputScreen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("FormScreen")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>FormScreen</Text>
          </TouchableOpacity>
        </>
      }
    />
  );
};

export default Home;

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
    marginBottom: 2,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "600",
  },
});
