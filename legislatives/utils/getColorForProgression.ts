import tinycolor from "tinycolor2";

const yellow = tinycolor("#FFFF00AA");
const orange = tinycolor("#FF7F00AA");
const red = tinycolor("#FF0000AA");
const green = tinycolor("#00FF00AA");
const white = tinycolor("#FFFFFFAA");

export const getColorRanges = ({
  min,
  max,
}: {
  min: number;
  max: number;
}): [number, number, number, number] => {
  const thresholdNegative = min < 1 ? 1 - (1 - min) / 5 : min;
  const thresholdPositive = 1 + (max - 1) / 5;
  const thresholdPositive2 = 1 + (max - 1) / 2;
  const thresholdPositive3 = 1 + ((max - 1) * 3) / 4;

  return [
    thresholdNegative,
    thresholdPositive,
    thresholdPositive2,
    thresholdPositive3,
  ];
};

export const getColorForProgression = (
  progression: number,
  { min, max }: { min: number; max: number }
) => {
  const thresholdPositive = 1 + (max - 1) / 5;
  const thresholdNegative = 1 - (1 - min) / 5;
  if (progression > thresholdPositive) {
    const thresholdPositive2 = 1 + ((max - 1) * 3) / 4;
    if (progression > thresholdPositive2) {
      return tinycolor.mix(orange, red, 100 * (progression / max));
    }
    const thresholdPositive3 = 1 + (max - 1) / 2;
    if (progression > thresholdPositive3) {
      return tinycolor.mix(
        yellow,
        orange,
        100 * (progression / thresholdPositive2)
      );
    }
    return tinycolor.mix(
      white,
      yellow,
      100 * (progression / thresholdPositive3)
    );
  }
  if (progression <= thresholdNegative) {
    return tinycolor.mix(
      white,
      green,
      100 * (1 - progression / thresholdNegative)
    );
  }
  return white;
};
