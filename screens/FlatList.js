import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import React from "react";
import Container from "../components/Container";

const FlatListComp = ({ navigation }) => {
  const user = [
    { id: 1, name: "abc" },
    { id: 2, name: "def" },
    { id: 3, name: "ghi" },
    { id: 4, name: "jkl" },
    { id: 5, name: "mno" },
    { id: 11, name: "abc" },
    { id: 12, name: "def" },
    { id: 13, name: "ghi" },
    { id: 14, name: "jkl" },
    { id: 15, name: "mno" },
    { id: 21, name: "abc" },
    { id: 22, name: "def" },
    { id: 23, name: "ghi" },
    { id: 24, name: "jkl" },
    { id: 25, name: "mno" },
  ];

  return (
    <Container
      child={
        <>
          <Button title="Home" onPress={() => navigation.navigate("Home")} />
          <View>
            <Text style={{ fontSize: 40, fontWeight: 600 }}>FlatList</Text>
            <FlatList
              data={user}
              renderItem={({ item }) => (
                <Text style={styles.text}>{item.name}</Text>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </>
      }
    />
  );
};

export default FlatListComp;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    padding: 10,
    color: "#fff",
    backgroundColor: "blue",
    borderColor: "#FFF",
    borderWidth: 2,
    margin: 10,
  },
});
