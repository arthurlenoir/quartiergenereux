import React, { SVGAttributes } from "react";
import tinycolor from "tinycolor2";

interface Props extends SVGAttributes<SVGSVGElement> {
  color: string;
  isHover: boolean;
}

export const Heart: React.FC<Props> = ({ color, isHover, ...props }) => {
  return (
    <svg
      viewBox="0 0 683.47107 655.54279"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="translate(92.557584,210.98642)">
        <g
          transform={`scale(${isHover ? 1.05 : 1})`}
          style={{ transition: "all 0.3s", transformOrigin: "center center" }}
        >
          <path
            fillRule="nonzero"
            fill={isHover ? tinycolor(color).darken(20).toString() : color}
            fillOpacity="1"
            d="m 548.89226,9.1094255 c 0,240.8754045 -299.71429,392.4129945 -299.71429,392.4129945 0,0 -299.714301,-151.53759 -299.714301,-392.4129945 0,-62.2172375 31.513952,-177.0619155 153.263561,-177.0619155 97.405,0 146.45074,87.734835 146.45074,87.734835 0,0 49.04572,-87.734835 146.45073,-87.734835 121.74839,0 153.26356,114.844678 153.26356,177.0619155"
            style={{ strokeWidth: 0.326506 }}
          />
        </g>
      </g>
    </svg>
  );
};
