import { StyleSheet, View } from "react-native";
import { Icon } from "react-native-paper";
import CardComponent from "./CardComponent";

export default function Stats() {
  return (
    <View style={styles.cardContainer}>
      <CardComponent
        title="Battery"
        text="60%"
        description="5 hours left"
        titleVariant="headlineSmall"
        cardStyle={{ width: "48%" }}
        cardTitleStyle={{ alignItems: "flex-start" }}
        right={() => <Icon source="battery-medium" size={32} />}
      />
      <CardComponent
        title="Tasks"
        text="21"
        description="tasks completed"
        titleVariant="headlineSmall"
        cardStyle={{ width: "48%" }}
        cardTitleStyle={{ alignItems: "flex-start" }}
        right={() => <Icon source="timer-cog-outline" size={32} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
    marginBottom: 16,
  },
});
