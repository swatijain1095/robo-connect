import React, { useEffect } from "react";
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { Svg } from "react-native-svg";
import RobotSvg from "../../assets/images/NEO_full_palette.svg";
import { BodyParts, DiagnosticStatus, HealthStatus } from "../types";
import { partsCordinates } from "../constants";
import ScanningSkeleton from "../components/ScanningSkeleton";
import { Icon } from "react-native-paper";
import { theme } from "../theme";
import startCase from "lodash/startCase";
import CardComponent from "../components/CardComponent";

const { width } = Dimensions.get("window");
export const ROBOT_WIDTH = width - 100;
export const ROBOT_HEIGHT = ROBOT_WIDTH * 2.4;

const mockData: DiagnosticStatus = {
  head: {
    status: "ok",
    message: "Everything is ok!",
  },
  leftArm: {
    status: "warning",
    message: "software issue. Please update to latest version",
  },
  rightArm: {
    status: "ok",
    message: "Everything is ok!",
  },
  body: {
    status: "ok",
    message: "Everything is ok!",
  },
  leftLeg: {
    status: "error",
    message: "hardware issue. Please contact support",
  },
  rightLeg: {
    status: "ok",
    message: "Everything is ok!",
  },
};

const statusColors: Record<HealthStatus, string> = {
  ok: "#4CAF50",
  warning: "#FFC107",
  error: "#F44336",
};

const statusIcons: Record<HealthStatus, string> = {
  ok: "check-circle-outline",
  warning: "alert-circle-outline",
  error: "alert-circle",
};

export default function DiagnoseScreen() {
  const [loading, setLoading] = React.useState(false);
  const [diagnosticsStatus, setDiagnosticsStatus] =
    React.useState<DiagnosticStatus | null>(null);
  const [selectedPart, setSelectedPart] = React.useState<BodyParts | null>(
    null
  );

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
        {diagnosticsStatus &&
          Object.entries(diagnosticsStatus).map(([key, value]) => (
            <TouchableOpacity
              style={[
                styles.indicator,
                partsCordinates[key as BodyParts],
                { backgroundColor: statusColors[value.status] },
              ]}
              key={key}
              onPress={() => setSelectedPart(key as BodyParts)}
            />
          ))}
        {diagnosticsStatus && selectedPart && (
          <CardComponent
            title={startCase(selectedPart)}
            titleVariant="titleMedium"
            right={() => (
              <Icon
                source={statusIcons[diagnosticsStatus[selectedPart].status]}
                size={24}
              />
            )}
            cardStyle={{
              ...partsCordinates[selectedPart as BodyParts],
              ...styles.cardContainer,
            }}
            cardTitleStyle={{ alignItems: "flex-start" }}
            description={diagnosticsStatus[selectedPart].message}
          />
        )}
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
  cardContainer: {
    position: "absolute",
    left: -70,
    right: "auto",
    width: 150,
    backgroundColor: theme.colors.secondaryBackdrop,
  },
});
