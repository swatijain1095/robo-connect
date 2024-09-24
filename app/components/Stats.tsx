import { StyleSheet, View } from "react-native";
import { Card, Paragraph, Icon, Text } from "react-native-paper";
import { theme } from "../theme";

export default function Stats() {
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Card.Content>
          <Card.Title
            title="Battery"
            titleVariant="headlineSmall"
            style={styles.cardTitle}
            right={() => <Icon source="battery-medium" size={32} />}
          />
          <Text variant="displaySmall">60%</Text>
          <Paragraph>5 hours left</Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Card.Title
            title="Tasks"
            titleVariant="headlineSmall"
            style={styles.cardTitle}
            right={() => <Icon source="timer-cog-outline" size={32} />}
          />
          <Text variant="displaySmall">21</Text>
          <Paragraph>tasks completed</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  card: {
    marginBottom: 16,
    width: "48%",
    backgroundColor: theme.colors.secondaryBackdrop,
  },
  cardTitle: {
    minHeight: 48,
    paddingLeft: 0,
    alignItems: "flex-start",
  },
});
