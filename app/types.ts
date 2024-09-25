export type HealthStatus = "ok" | "warning" | "error";

export type BodyParts =
  | "head"
  | "leftArm"
  | "rightArm"
  | "leftLeg"
  | "rightLeg"
  | "body";

export type FullHealthStatus = {
  status: HealthStatus;
  message: string;
};

export type DiagnosticStatus = Record<BodyParts, FullHealthStatus>;
