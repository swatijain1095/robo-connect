import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { theme } from "./theme";
import DiagnoseScreen from "./screens/DiagnoseScreen";
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Diagnose: undefined;
};

// ignoring this warning as I am not using shared value. suggestion here is not relvant
LogBox.ignoreLogs([
  "It looks like you might be using shared value's .value inside reanimated inline style",
]);

export default function Index() {
  return (
    <PaperProvider theme={theme}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Diagnose"
          component={DiagnoseScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </PaperProvider>
  );
}
