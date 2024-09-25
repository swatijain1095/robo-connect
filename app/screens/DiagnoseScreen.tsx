import React, { useEffect } from "react";
import { SafeAreaView, Dimensions, StyleSheet, View } from "react-native";
import { Svg } from "react-native-svg";
import RobotSvg from "../../assets/images/NEO_full_palette.svg";
import { BodyParts, DiagnosticStatus, HealthStatus } from "../types";
import { partsCordinates } from "../constants";
import ScanningSkeleton from "../components/ScanningSkeleton";

const { width } = Dimensions.get("window");
export const ROBOT_WIDTH = width - 100;
export const ROBOT_HEIGHT = ROBOT_WIDTH * 2.4;

const mockData: DiagnosticStatus = {
  head: "ok",
  leftArm: "warning",
  rightArm: "ok",
  body: "ok",
  leftLeg: "error",
  rightLeg: "ok",
};

const statusColors: Record<HealthStatus, string> = {
  ok: "#4CAF50",
  warning: "#FFC107",
  error: "#F44336",
};

export default function DiagnoseScreen() {
  const [loading, setLoading] = React.useState(false);
  const [diagnosticsStatus, setDiagnosticsStatus] = React.useState<
    DiagnosticStatus | {}
  >({});

  const runDiagnose = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDiagnosticsStatus(mockData);
    }, 3000);
  };

  useEffect(() => {
    runDiagnose();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading && <ScanningSkeleton />}
      <View style={styles.robotContainer}>
        <Svg
          width={ROBOT_WIDTH}
          height={ROBOT_HEIGHT}
          viewBox={`0 0 ${ROBOT_WIDTH} ${ROBOT_HEIGHT}`}
        >
          <RobotSvg width={ROBOT_WIDTH} height={ROBOT_HEIGHT} />
        </Svg>
        {Object.entries(diagnosticsStatus).map(([key, value]) => (
          <View
            style={[
              styles.indicator,
              partsCordinates[key as BodyParts],
              { backgroundColor: statusColors[value] },
            ]}
            key={key}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  robotContainer: {
    position: "relative",
    width: ROBOT_WIDTH,
    height: ROBOT_HEIGHT,
  },
  indicator: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
  },
});
