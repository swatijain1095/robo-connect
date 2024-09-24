import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import LoginScreen from "./screens/LoginScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <PaperProvider>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </PaperProvider>
  );
}
