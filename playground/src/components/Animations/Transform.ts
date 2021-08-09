import type { TransformsStyle } from "react-native";
import type { Vector } from "react-native-redash";

type RNTransform = Exclude<TransformsStyle["transform"], undefined>;

export const transformOrigin = (
  { x, y }: Vector,
  transformations: RNTransform
): RNTransform => {
  "worklet";
  return [
    { translateX: x },
    { translateY: y },
    ...transformations,
    { translateX: -x },
    { translateY: -y },
  ];
};