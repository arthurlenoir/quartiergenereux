import React, { JSX } from "react";

import styles from "./CoPresidency.module.css";

type CoPresident = {
  name: string;
  photo: JSX.Element;
};

interface Props {
  coPresidency: CoPresident[];
}

export const CoPresidency: React.FC<Props> = ({ coPresidency }) => {
  return (
    <div className={styles.container}>
      {coPresidency.map((coPresident, index) => (
        <figure key={index}>
          {coPresident.photo}
          <figcaption>{coPresident.name}</figcaption>
        </figure>
      ))}
    </div>
  );
  return;
};
