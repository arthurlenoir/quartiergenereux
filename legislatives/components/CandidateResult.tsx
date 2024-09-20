import React from "react";
import { CandidateResultI } from "../types";

import styles from "./CandidateResult.module.css";

interface Props {
  candidate: CandidateResultI;
  totalExpressed: number;
}

export const CandidateResult: React.FC<Props> = ({
  candidate,
  totalExpressed,
}) => {
  return (
    <div className={styles.candidate}>
      <div className={`${styles.candidateLine} ${styles.mainLine}`}>
        <div className={styles.candidateName}>
          {candidate.prenom} {candidate.nom}
        </div>
        <div className={styles.candidateResult}>
          {(candidate.voix / totalExpressed).toLocaleString("fr-FR", {
            style: "percent",
            maximumFractionDigits: 1,
          })}
        </div>
      </div>
      <div className={styles.candidateLine}>
        <div className={styles.candidateName}>{candidate.nuance}</div>
        <div className={styles.candidateResult}>
          {candidate.voix.toLocaleString("fr-FR")} voix
        </div>
      </div>
    </div>
  );
};
