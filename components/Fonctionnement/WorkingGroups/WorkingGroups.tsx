import React, { Fragment, useLayoutEffect, useRef, useState } from "react";
import { Heart } from "./Heart";

import style from "./WorkingGroups.module.css";

import { WorkingGroup } from "./WorkingGroup.types";

interface Props {
  workingGroups: WorkingGroup[];
}

export const WorkingGroups: React.FC<Props> = ({ workingGroups }) => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [hoveredElement, setHoveredElement] = useState<number | null>(null);

  useLayoutEffect(() => {
    const onResize = () => {
      if (refContainer.current) {
        setWidth(refContainer.current.clientWidth);
      }
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div ref={refContainer} style={{ height: `${(750 * width) / 1000}px` }}>
      <div
        style={{
          position: "relative",
          height: "750px",
          width: "1000px",
          transform: width ? `scale(${width / 1000})` : "scale(1)",
          transformOrigin: "0 0",
          overflow: "visible",
        }}
      >
        <div className={style.Center}>Assemblée Généreuse</div>
        {workingGroups.map((workingGroup, i) => {
          const angle = (i * 360) / workingGroups.length;
          const insideAngle = 45 + 15 * i;
          return (
            <Fragment key={i}>
              <Heart
                key={i}
                color={workingGroup.color}
                className={style.Heart}
                style={{
                  transform: `rotate(${angle}deg)`,
                }}
                onMouseEnter={() => setHoveredElement(i)}
                onMouseLeave={() => setHoveredElement(null)}
                isHover={hoveredElement === i}
              />
              <div
                className={style.ReferentsContainer}
                style={{
                  transform: `rotate(${angle}deg)`,
                }}
                onMouseEnter={() => setHoveredElement(i)}
                onMouseLeave={() => setHoveredElement(null)}
              >
                <div
                  className={style.GroupNameContainer}
                  style={angle === 0 ? { top: -40, left: 70 } : undefined}
                >
                  <div
                    className={style.GroupName}
                    style={{
                      transform: `rotate(${-angle}deg)`,
                      top: angle > 150 && angle < 210 ? 30 : 0,
                    }}
                  >
                    {workingGroup.name}
                  </div>
                </div>
                <div
                  className={style.Referents}
                  style={{
                    transform: `rotate(${insideAngle - angle}deg)`,
                  }}
                >
                  {workingGroup.referents.map((referent, j) => (
                    <div
                      key={j}
                      className={style.Referent}
                      style={{ transform: `rotate(${-insideAngle}deg)` }}
                    >
                      {referent.photo}
                      <div className={style.ReferentName}>{referent.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
