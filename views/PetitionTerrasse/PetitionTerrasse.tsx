import React from "react";

import styles from "./PetitionTerrasse.module.css";

export const PetitionTerrasse: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Une terrasse pour le QG !</h2>
      <p>
        Dès son ouverture le QG a tenté d&apos;obtenir un droit de terrasse.
        D&apos;ailleurs <b>notre bail nous y autorise</b> et notre emplacement
        rend son installation possible. En février 2023,{" "}
        <b>
          la ville de Montpellier nous informe d&apos;un refus administratif
        </b>{" "}
        sans même un passage de notre dossier en commission. Le motif invoqué
        est froid, robotique et un peu hors-sol : Le Quartier Généreux ne
        dispose pas de numéro Kbis (non attribué aux associations) et ne peut
        donc pas disposer d&apos;un droit de terrasse.
      </p>

      <p>
        <b>
          Avec votre soutien, nous pouvons faire entendre notre voix et obtenir
          ce droit de terrasse auprès de la mairie.
        </b>
      </p>
      <div className={styles.buttonContainer}>
        <a
          href="https://www.change.org/p/autorisez-l-installation-d-une-terrasse-au-quartier-g%C3%A9n%C3%A9reux?redirect_reason=guest_user"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          Je signe la pétition
        </a>
        <div className={styles.subButton}>
          Déjà plus de 2 300 signatures, On compte sur vous !
        </div>
      </div>
    </div>
  );
};
