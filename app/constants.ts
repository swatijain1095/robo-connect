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
    bottom: null,
    right: null,
  },
  leftArm: {
    top: "30%",
    left: "45%",
    bottom: null,
    right: null,
  },
  rightArm: {
    top: "30%",
    right: "5%",
    bottom: null,
    left: null,
  },
  body: {
    top: "25%",
    left: "60%",
    bottom: null,
    right: null,
  },
  leftLeg: {
    bottom: "20%",
    left: "50%",
    top: null,
    right: null,
  },
  rightLeg: {
    bottom: "20%",
    right: "15%",
    top: null,
    left: null,
  },
};
