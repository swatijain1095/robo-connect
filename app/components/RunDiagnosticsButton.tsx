import { Card, Icon } from "react-native-paper";
import { theme } from "../theme";

export default function RunDiagnosticsButton() {
  return (
    <Card style={{ backgroundColor: theme.colors.secondaryBackdrop }}>
      <Card.Content>
        <Card.Title
          titleVariant="titleLarge"
          style={{
            paddingLeft: 0,
            minHeight: 36,
          }}
          titleStyle={{ marginBottom: 0 }}
          title="Run Diagnostics"
          leftStyle={{ marginRight: 0 }}
          left={() => <Icon source="speedometer" size={32} />}
          right={() => <Icon source="chevron-right" size={32} />}
        />
      </Card.Content>
    </Card>
  );
}
