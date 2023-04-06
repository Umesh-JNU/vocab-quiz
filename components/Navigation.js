import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Result from "../screens/Result";
import Quiz from "../screens/Quiz";
import InputScreen from "../screens/InputScreen";
import FormScreen from "../screens/FormScreen";
import DataScreen from "../screens/DataScreen";

// create the stack for navigating screens
const Stack = createNativeStackNavigator();

function NavStack() {
  return (
    //  to hide header, set headerShown -> false
    //  Stack.Navigator is similar to Routes
    //  Stack.Screen is similar to Route. Here name is path and component is Element.
    //  Below code is similar to -
    //  <Routes>
    //   <Route path="/Home" element={<Home />} />
    //   <Route path="/Quiz" element={<Quiz />} />
    //   <Route path="/Result" element={<Result />} />
    //  </Routes>

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Result" component={Result} />
      <Stack.Screen name="InputScreen" component={InputScreen} />
      <Stack.Screen name="FormScreen" component={FormScreen} />
      <Stack.Screen name="DataScreen" component={DataScreen} />
    </Stack.Navigator>
  );
}

export default NavStack;
