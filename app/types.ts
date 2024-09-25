export type HealthStatus = "ok" | "warning" | "error";

export type BodyParts =
  | "head"
  | "leftArm"
  | "rightArm"
  | "leftLeg"
  | "rightLeg"
  | "body";

export type DiagnosticStatus = Record<BodyParts, HealthStatus>;
