import { Button, StyleSheet, View } from "react-native";
import React from "react";
// demonstrate how to go to previous screen
// to do so use navigation.goBack()
const BackButton = ({ goBack }) => {
    console.log(goBack);
  return (
    <View>
      <Button
        title="<--"
        onPress={() => goBack.goBack()}
        style={styles.backBtn}
      />
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backBtn: {
    padding: 10,
    borderRadius: 10,
  },
});
