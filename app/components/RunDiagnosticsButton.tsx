import { Icon } from "react-native-paper";
import CardComponent from "./CardComponent";

export default function RunDiagnosticsButton({
  onPress,
}: {
  onPress: () => void;
}) {
  return (
    <CardComponent
      title="Run Diagnostics"
      left={() => <Icon source="speedometer" size={32} />}
      onPress={onPress}
      right={() => <Icon source="chevron-right" size={32} />}
      titleVariant="titleLarge"
      cardStyle={{ minWidth: "100%" }}
    />
  );
}
