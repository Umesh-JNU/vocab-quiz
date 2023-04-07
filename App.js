/**
 * Run following commands before:
 *    For running on web - npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
 *
 *    For navigation     - npm i @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack
 *    Note - for ios also install - npx pod-install ios
 *
 *    For using bottom tab navigation - npm install @react-navigation/bottom-tabs
 *
 *    For using top tab navigation - npm install @react-navigation/material-top-tabs react-native-tab-view react-native-pager-view@6.1.2
 *
 * Using external components - npm install native-base react-native-svg@13.4.0 react-native-safe-area-context@4.5.0
 */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import NavStack from "./components/Navigation";
import NavTab from "./components/Navigation";
import NavTopTab from "./components/Navigation";

const App = () => {
  return (
    // This is used as BrowserRouter for navigating screens
    <NavigationContainer>
      {/* <NativeBaseProvider> */}
      {/* <NavStack /> */}
      {/* <NavTab /> */}
      <NavTopTab />
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default App;
