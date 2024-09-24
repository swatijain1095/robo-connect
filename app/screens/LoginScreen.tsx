import { ResizeMode, Video } from "expo-av";
import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export default function LoginScreen() {
  const videoRef = React.useRef<Video>(null);

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
        <Button mode="contained" style={styles.button}>
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
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
