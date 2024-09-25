import { DimensionValue } from "react-native";
import { BodyParts } from "./types";

export const partsCordinates: Record<
  BodyParts,
  {
    top: DimensionValue;
    left: DimensionValue;
    bottom: DimensionValue;
    right: DimensionValue;
  }
> = {
  head: {
    top: "5%",
    left: "60%",
    bottom: "auto",
    right: "auto",
  },
  leftArm: {
    top: "30%",
    left: "45%",
    bottom: "auto",
    right: "auto",
  },
  rightArm: {
    top: "30%",
    right: "5%",
    bottom: "auto",
    left: "auto",
  },
  body: {
    top: "25%",
    left: "60%",
    bottom: "auto",
    right: "auto",
  },
  leftLeg: {
    bottom: "20%",
    left: "50%",
    top: "auto",
    right: "auto",
  },
  rightLeg: {
    bottom: "20%",
    right: "15%",
    top: "auto",
    left: "auto",
  },
};
