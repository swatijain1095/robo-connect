import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useRef } from "react";
import { StyleSheet, Dimensions, Animated } from "react-native";

const { height } = Dimensions.get("window");

export default function ScanningSkeleton() {
  const position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const moveDown = Animated.timing(position, {
      toValue: height - 200,
      duration: 1200,
      useNativeDriver: true,
    });

    const moveUp = Animated.timing(position, {
      toValue: 0,
      duration: 1200,
      useNativeDriver: true,
    });

    const sequence = Animated.sequence([moveDown, moveUp]);

    Animated.loop(sequence).start();

    return () => {
      position.stopAnimation();
    };
  }, []);

  return (
    <Animated.View
      style={[styles.container, { transform: [{ translateY: position }] }]}
    >
      <LinearGradient
        colors={[
          "rgba(34, 197, 94, 0)",
          "rgba(34, 197, 94, 0.1)",
          "rgba(34, 197, 94, 0.2)",
          "rgba(34, 197, 94, 0.2)",
          "rgba(34, 197, 94, 0.1)",
          "rgba(34, 197, 94, 0)",
        ]}
        style={styles.gradient}
      ></LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 40,
    width: "100%",
    zIndex: 99,
    height: height * 0.3,
  },
  gradient: {
    width: "100%",
    height: "100%",
  },
});
