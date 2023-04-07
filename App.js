/**
 * Run following commands before:
 *    For running on web - npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1
 *
 *    For navigation     - npm i @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack
 *    Note - for ios also install - npx pod-install ios
 *
 * Using external components - npm install native-base react-native-svg@13.4.0 react-native-safe-area-context@4.5.0
 */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";

import NavStack from "./components/Navigation";

const App = () => {
  return (
    // This is used as BrowserRouter for navigating screens
    <NavigationContainer>
      {/* <NativeBaseProvider> */}
        <NavStack />
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default App;
