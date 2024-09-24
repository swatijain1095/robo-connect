import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ResizeMode, Video } from "expo-av";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { RootStackParamList } from "..";
import { theme } from "../theme";

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [loading, setLoading] = React.useState(false);
  const videoRef = React.useRef<Video>(null);

  const handleLogin = async () => {
    setLoading(true);
    // this will be replaced with connect logic and will redirect to home screen
    await setTimeout(() => {
      setLoading(false);
      navigation.navigate("Home");
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Video
        source={require("../../assets/videos/background-video.mp4")}
        ref={videoRef}
        style={styles.backgroundVideo}
        resizeMode={ResizeMode.COVER}
        isLooping
        isMuted
        shouldPlay
      />
      <View style={styles.overlay}>
        <Button
          mode="contained"
          onPress={handleLogin}
          contentStyle={{ height: 50 }}
          labelStyle={theme.fonts.titleLarge}
          loading={loading}
        >
          Login
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 100,
  },
});
