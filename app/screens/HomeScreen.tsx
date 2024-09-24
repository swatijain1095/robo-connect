import { View, StyleSheet, ImageBackground } from "react-native";
import { theme } from "../theme";
import {
  Card,
  Icon,
  Paragraph,
  Text,
  Title,
  Button,
  ActivityIndicator,
} from "react-native-paper";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "..";

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
          <View style={styles.cardContainer}>
            <Card style={styles.card}>
              <Card.Content>
                <Title>Battery</Title>
                <Paragraph>Charge: 75%</Paragraph>
                <Paragraph>ETA: 5 hours</Paragraph>
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Content>
                <Title>Diagnose</Title>
                <Paragraph>No major issues</Paragraph>
                <Paragraph>some minor issues</Paragraph>
              </Card.Content>
            </Card>
          </View>
        </View>
        <ImageBackground
          source={require("../../assets/images/NEO_face_closeup.jpg")}
          style={styles.backgroundImage}
          onLoadEnd={() => setIsLoading(false)}
        >
          <Button mode="elevated">Ask</Button>
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
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  card: {
    marginBottom: 16,
    width: "48%",
  },
  backgroundImage: {
    width: "100%",
    flexGrow: 2,
    alignItems: "center",
    justifyContent: "center",
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
});
