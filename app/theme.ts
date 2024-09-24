import { DefaultTheme } from "react-native-paper";

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6A6662",
    secondary: "#9E9A93",
    background: "#F0F1ECff",
    surface: "#E8E8E4",
    text: "#3A3434",
    disabled: "#DFDED9",
    placeholder: "#9E9A93",
    backdrop: "rgba(58, 52, 52, 0.5)",
    notification: "#9E9A93",
  },
};

export type AppTheme = typeof theme;
