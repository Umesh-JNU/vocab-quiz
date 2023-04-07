import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screens/Home";
import Result from "../screens/Result";
import Quiz from "../screens/Quiz";
import InputScreen from "../screens/InputScreen";
import FormScreen from "../screens/FormScreen";
import DataScreen from "../screens/DataScreen";
import FlatList from "../screens/FlatList";
import CameraRoll from "../screens/CameraRoll";
import { Text } from "react-native";

// create the stack for navigating screens
const Stack = createNativeStackNavigator();
// create the tab for navigation
const Tab = createBottomTabNavigator();
// create the tab for navigation
const TopTab = createMaterialTopTabNavigator();

// export default function NavStack() {
//   return (
//     //  to hide header, set headerShown -> false
//     //  Stack.Navigator is similar to Routes
//     //  Stack.Screen is similar to Route. Here name is path and component is Element.
//     //  Below code is similar to -
//     //  <Routes>
//     //   <Route path="/Home" element={<Home />} />
//     //   <Route path="/Quiz" element={<Quiz />} />
//     //   <Route path="/Result" element={<Result />} />
//     //  </Routes>

//     //  Styling Stack navigation -
//     //   to style all stacks use `screenOptions` prop in Stack.Navigator and
//     // for any particular screen use the `option` props only to that Stack.Screen

//     // showing component in header (default side is left). To show in right use headerRight
//     <Stack.Navigator
//       screenOptions={{
//         // headerShown: false, // to show header or not
//         headerRight: () => <Text>I'm right Component</Text>,
//         headerTitle: () => <Text>I'm left Component</Text>,
//         headerStyle: { backgroundColor: "blue" },
//         // headerTintColor: "orange",      // text color
//         // headerTitleStyle: {
//         //   fontSize: 25,
//         //   fontWeight: 600
//         // }
//       }}
//     >
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Quiz" component={Quiz} />
//       <Stack.Screen name="Result" component={Result} />
//       <Stack.Screen name="InputScreen" component={InputScreen} />
//       <Stack.Screen name="FormScreen" component={FormScreen} />
//       <Stack.Screen name="DataScreen" component={DataScreen} />
//       <Stack.Screen name="FlatList" component={FlatList} />
//     </Stack.Navigator>
//   );
// };

// a demo of bottom tab navigation bar
// export default function NavTab() {
//   return (
//     <Tab.Navigator
//       // screenOptions={{
//         // headerShown: false, // to show header or not
//         // headerRight: () => <Text>I'm right Component</Text>,
//         // headerTitle: () => <Text>I'm left Component</Text>,
//         // headerStyle: { backgroundColor: "blue" },
//         // headerTintColor: "orange",      // text color
//         // headerTitleStyle: {
//         //   fontSize: 25,
//         //   fontWeight: 600
//         // }
//       // }}
//     >
//       <Tab.Screen name="Home" component={Home} />
//       <Tab.Screen name="Quiz" component={Quiz} />
//       {/* <Tab.Screen name="Result" component={Result} /> */}
//       <Tab.Screen name="InputScreen" component={InputScreen} />
//       <Tab.Screen name="FormScreen" component={FormScreen} />
//       {/* <Tab.Screen name="DataScreen" component={DataScreen} /> */}
//       <Tab.Screen name="FlatList" component={FlatList} />
//     </Tab.Navigator>
//   )
// }

// a demo of bottom tab navigation bar
export default function NavTopTab() {
  return (
    <TopTab.Navigator
    // screenOptions={{
    // headerShown: false, // to show header or not
    // headerRight: () => <Text>I'm right Component</Text>,
    // headerTitle: () => <Text>I'm left Component</Text>,
    // headerStyle: { backgroundColor: "blue" },
    // headerTintColor: "orange",      // text color
    // headerTitleStyle: {
    //   fontSize: 25,
    //   fontWeight: 600
    // }
    // }}
    >
      {/* <TopTab.Screen name="Home" component={Home} /> */}
      <TopTab.Screen name="Camera" component={CameraRoll} />
      <TopTab.Screen name="Quiz" component={Quiz} />
      {/* <TopTab.Screen name="Result" component={Result} /> */}
      <TopTab.Screen name="InputScreen" component={InputScreen} />
      {/* <TopTab.Screen name="FormScreen" component={FormScreen} /> */}
      {/* <TopTab.Screen name="DataScreen" component={DataScreen} /> */}
      <TopTab.Screen name="FlatList" component={FlatList} />
    </TopTab.Navigator>
  );
}
