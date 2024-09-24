import { View, StyleSheet, ImageBackground } from "react-native";
import { theme } from "../theme";
import { Icon, Text, ActivityIndicator } from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "..";
import Stats from "../components/Stats";
import { Feather } from "@expo/vector-icons";

type HomeScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;
export default function HomeScreen() {
  const [isLoading, setIsLoading] = React.useState(true);
  const navigation = useNavigation<HomeScreenNavigationProps>();

  return (
    <>
      {isLoading && (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size={"large"}
        />
      )}
      <View style={styles.outerContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.switchContainer}>
            <Text variant="displayLarge">NEO</Text>
            <Icon source={"account-cog"} size={50} />
          </View>
          <Stats />
        </View>
        <ImageBackground
          source={require("../../assets/images/NEO_face_closeup.jpg")}
          style={styles.backgroundImage}
          onLoadEnd={() => setIsLoading(false)}
        >
          <View style={styles.buttonContainer}>
            <Feather name="mic" size={24} color="white" />
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "space-between",
  },
  innerContainer: {
    backgroundColor: theme.colors.background,
    flex: 1,
    padding: 16,
    marginVertical: 50,
    gap: 24,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  backgroundImage: {
    width: "100%",
    flexGrow: 2,
    position: "relative",
  },
  indicator: {
    position: "absolute",
    backgroundColor: theme.colors.background,
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    top: "75%",
    left: "42%",
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: theme.colors.backdrop,
    justifyContent: "center",
    alignItems: "center",
  },
});
