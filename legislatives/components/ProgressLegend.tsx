import React from "react";
import tinycolor from "tinycolor2";

import styles from "./ProgressLegend.module.css";
import { getColorForProgression, getColorRanges } from "../utils";

interface Props {
  min: number;
  max: number;
}

export const ProgressLegend: React.FC<Props> = (props) => {
  const { min, max } = props;
  const totalRange = max - min;
  const [threshold1, threshold2, threshold3, threshold4] =
    getColorRanges(props);
  const section1 = (threshold1 - min) / totalRange;
  const section2 = (threshold2 - threshold1) / totalRange;
  const section3 = (threshold3 - threshold2) / totalRange;
  const section4 = (threshold4 - threshold3) / totalRange;
  const section5 = (max - threshold4) / totalRange;

  const color1 = getColorForProgression(min, props).toHex8String();
  const color2 = getColorForProgression(threshold1, props).toHex8String();
  const color3 = getColorForProgression(threshold2, props).toHex8String();
  const color4 = getColorForProgression(threshold3, props).toHex8String();
  const color5 = getColorForProgression(threshold4, props).toHex8String();
  const color6 = getColorForProgression(max, props).toHex8String();
  console.log(min, threshold1, threshold2, threshold3, threshold4, max);
  return (
    <div className={styles.progressLegend}>
      <div
        className={styles.progressLegendSection}
        style={{
          flex: `1 1 ${section1 * 100}%`,
          background: `linear-gradient(to right, ${color1}, ${color2})`,
        }}
      >
        {section1 > 0.1 && (
          <span>
            {((min - 1) * 100).toLocaleString(undefined, {
              maximumFractionDigits: 0,
              signDisplay: "always",
            })}
            %
          </span>
        )}
      </div>
      <div
        className={styles.progressLegendSection}
        style={{
          flex: `1 1 ${section2 * 100}%`,
          background: `linear-gradient(to right, ${color2}, ${color3})`,
        }}
      >
        {section2 > 0.1 && (
          <span>
            {((threshold1 - 1) * 100).toLocaleString(undefined, {
              maximumFractionDigits: 0,
              signDisplay: "always",
            })}
            %
          </span>
        )}
      </div>
      <div
        className={styles.progressLegendSection}
        style={{
          flex: `1 1 ${section3 * 100}%`,
          background: `linear-gradient(to right, ${color3}, ${color4})`,
        }}
      >
        {section3 > 0.1 && (
          <span>
            {((threshold2 - 1) * 100).toLocaleString(undefined, {
              maximumFractionDigits: 0,
              signDisplay: "always",
            })}
            %
          </span>
        )}
      </div>
      <div
        className={styles.progressLegendSection}
        style={{
          flex: `1 1 ${section4 * 100}%`,
          background: `linear-gradient(to right, ${color4}, ${color5})`,
        }}
      >
        {section4 > 0.1 && (
          <span>
            {((threshold3 - 1) * 100).toLocaleString(undefined, {
              maximumFractionDigits: 0,
              signDisplay: "always",
            })}
            %
          </span>
        )}
      </div>
      <div
        className={styles.progressLegendSection}
        style={{
          flex: `1 1 ${section5 * 100}%`,
          background: `linear-gradient(to right, ${color5}, ${color6})`,
        }}
      >
        {section5 > 0.1 && (
          <span>
            {((threshold4 - 1) * 100).toLocaleString(undefined, {
              maximumFractionDigits: 0,
              signDisplay: "always",
            })}
            %
          </span>
        )}
      </div>
      <div
        className={styles.progressLegendSection}
        style={{
          flex: `1 1 0%`,
        }}
      >
        <span>
          {((max - 1) * 100).toLocaleString(undefined, {
            maximumFractionDigits: 0,
            signDisplay: "always",
          })}
          %
        </span>
      </div>
    </div>
  );
};
