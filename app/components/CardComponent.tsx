import React from "react";
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Card, MD3TypescaleKey, Paragraph, Text } from "react-native-paper";
import { theme } from "../theme";

type CardComponentProps = {
  title: string;
  titleVariant?: keyof typeof MD3TypescaleKey;
  left?: () => JSX.Element;
  right?: () => JSX.Element;
  onPress?: () => void;
  text?: string;
  description?: string;
  cardStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  cardTitleStyle?: StyleProp<TextStyle>;
};

export default function CardComponent({
  title,
  titleVariant,
  left,
  right,
  onPress,
  text,
  description,
  cardStyle,
  titleStyle,
  cardTitleStyle,
}: CardComponentProps) {
  return (
    <Card style={[styles.card, cardStyle]} onPress={onPress}>
      <Card.Title
        title={title}
        style={[styles.cardTitle, cardTitleStyle]}
        titleVariant={titleVariant}
        left={left}
        right={right}
        titleStyle={titleStyle}
      />
      {(text || description) && (
        <Card.Content>
          {text && <Text variant="displaySmall">{text}</Text>}
          {description && <Paragraph>{description}</Paragraph>}
        </Card.Content>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.secondaryBackdrop,
  },
  cardTitle: {
    minHeight: 48,
    padding: 10,
  },
});
