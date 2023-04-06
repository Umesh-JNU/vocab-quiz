import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Container from "../components/Container";

const DataScreen = ({ navigation, route }) => {
  const data = route.params;
  const arr = Object.keys(data);
  console.log({ arr });
  
  return (
    <Container
      child={
        <>
          <Button title="Home" onPress={() => navigation.navigate("Home")} />
          <View>
            <Text style={[styles.text, { marginBottom: 10 }]}>DataScreen</Text>
            {arr &&
              arr.length > 0 &&
              arr.map((k) => (
                <Text key={k} style={styles.text}>
                  {k}: {data[k]}
                </Text>
              ))}
          </View>
        </>
      }
    />
  );
};

export default DataScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 500,
  },
});
