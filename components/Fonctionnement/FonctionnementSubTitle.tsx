import React from "react";

interface Props extends React.PropsWithChildren {
  size?: number;
}

export const FonctionnementSubTitle: React.FC<Props> = ({
  children,
  size = 5,
}) => {
  return (
    <h1
      style={{
        fontFamily: "'LilitaOne', cursive",
        textTransform: "uppercase",
        textAlign: "center",
        fontSize: `${size}px`,
        letterSpacing: "0px",
        color: "#36478f",
        margin: "20px 0 0px",
      }}
    >
      <svg
        viewBox="0 0 94.087227 15"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs id="defs308" />
        <g id="layer1" transform="translate(-63.404195,-32.526424)">
          <path
            fill="transparent"
            stroke="transparent"
            strokeWidth={0}
            d="m 63.49606,58.274491 c 0,0 18.505799,-17.858614 46.00107,-17.858614 27.49527,0 47.9086,17.356827 47.9086,17.356827"
            id="curve2"
          />
          <text>
            <textPath
              textAnchor="middle"
              startOffset="50%"
              dominantBaseline="auto"
              alignmentBaseline="middle"
              lengthAdjust="spacingAndGlyphs"
              xlinkHref="#curve2"
              fill="#36478f"
            >
              <tspan dy="0">{children}</tspan>
            </textPath>
          </text>
        </g>
      </svg>
    </h1>
  );
};
