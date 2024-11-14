import React from "react";
import Head from "next/head";

import Image from "next/image";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RoomIcon from "@mui/icons-material/Room";

import styles from "./fronde.module.css";

const FrondePopulaire: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Fronde Populaire : Organisons la riposte contre l&apos;extrême droite
          dans l&apos;Hérault
        </title>
        <meta
          name="description"
          content="Dans l’Hérault, organisons la riposte face à l’extrême droite"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Fronde Populaire : Organisons la riposte contre l'extrême droite dans l'Hérault"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://quartiergenereux.fr/fronde-populaire`}
        />
        <meta property="og:image" content="/fronde/preview.webp" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.root}>
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.date}>30 Novembre</div>
            <Image
              src="/fronde/titre.webp"
              style={{ maxWidth: "100%", height: "auto", margin: "auto" }}
              width="1170"
              height="175"
              alt="La Fronde Populaire !"
            />
            <p>
              Dans l’Hérault, organisons la
              <br /> riposte face à l’extrême droite
            </p>
            <div className={styles.lieuEtHeure}>
              <div className={styles.lieu}>
                <RoomIcon />
                Montarnaud - Macondo
              </div>
              <div className={styles.heure}>
                9h30-21h
                <AccessTimeIcon />
              </div>
            </div>
          </div>
        </header>
        <main className={styles.main}>
          <div className={`${styles.container} ${styles.mainContainer}`}>
            <h2>
              Conférence “Montée du RN dans l&apos;Hérault :
              <br /> comprendre le phénomène et l&apos;endiguer”
            </h2>
            <div className={styles.conference}>
              <div className={styles.intervenant}>
                <Image
                  src="/fronde/benoit-coquard.webp"
                  width="100"
                  height="100"
                  alt="Benoît Coquard"
                />
                <p>
                  <span className={styles.name}>Benoît Coquard</span>
                  sociologue, auteur de “Ceux qui restent”
                </p>
              </div>
              <div className={styles.intervenant}>
                <Image
                  src="/fronde/tristan-berteloot.webp"
                  width="100"
                  height="100"
                  alt="Tristan Berteloot"
                />
                <p>
                  <span className={styles.name}>Tristan Berteloot</span>
                  journaliste à Libération, auteur de “la machine à gagner”
                </p>
              </div>
              <div className={styles.intervenant}>
                <Image
                  src="/fronde/emmanuel.negrier.webp"
                  width="100"
                  height="100"
                  alt="Emmanuel Négrier"
                />
                <p>
                  <span className={styles.name}>Emmanuel Négrier</span>
                  politiste, auteur d’articles d’analyse électorale sur
                  l’Hérault
                </p>
              </div>
            </div>

            <a
              href="https://www.helloasso.com/associations/le-quartier-genereux/evenements/fronde-populaire"
              className={styles.btn}
            >
              Je m&apos;inscris !
            </a>

            <h2>Tables-rondes</h2>
            <ul>
              <li>
                La <b>métropolisation</b> à outrance : le creuset des fractures
                territoriales ?
              </li>
              <li>
                Extrême droite dans l&apos;Hérault : « on vous voit ! ». Focus
                sur le projet de{" "}
                <b>l&apos;observatoire de l&apos;extrême droite.</b>
              </li>
              <li>
                <b>Programme du NFP :</b> montrer son applicabilité en
                commençant par nos communes en 2026 ?
              </li>
              <li>
                Comment <b>monter un tiers lieu</b> vecteur de résistance face à
                la montée de l&apos;extrême droite.
              </li>
              <li>
                Construire <b>une écologie populaire</b> face à l&apos;idée
                d&apos;écologie punitive ?
              </li>
              <li>
                Instrumentalisation de <b>la laïcité</b> : que faire ? Comment
                en refaire un <b>principe de concorde</b> ?
              </li>
            </ul>

            <h2>Ateliers pratiques</h2>
            <div className={styles.col2}>
              <ul>
                <li>
                  <b>Comment débattre</b> avec des électeur·ices du RN ?
                </li>
                <li>
                  Savoir prendre des photos ou monter des vidéos pour{" "}
                  <b>valoriser nos luttes</b>
                </li>
                <li>
                  <b>Résister en féministes :</b> outils et perspectives pour
                  lutter contre le fascisme
                </li>
              </ul>
              <ul>
                <li>
                  <b>Des visuels pour occuper l&apos;espace,</b> sérigraphie,
                  lino, pochoirs, etc.
                </li>
                <li>
                  Des techniques de <b>porte-à-porte</b> et pleins d’autres
                  encore !
                </li>
              </ul>
            </div>
            <h3>
              Et aussi : Banquet - Concert de{" "}
              <a
                href="https://www.youtube.com/watch?v=Wn4vH0TBTZY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dab Rozer
              </a>{" "}
              - Garderie militante
            </h3>

            <a
              href="https://www.helloasso.com/associations/le-quartier-genereux/evenements/fronde-populaire"
              className={styles.btn}
            >
              Je m&apos;inscris !
            </a>

            <div className={styles.col2}>
              <p className={styles.footer}>
                À l’initiative des candidat·es NFP aux législatives 2024 des
                circonscriptions RN ou fortement menacées par le RN et
                co-organisé par le
              </p>
              <Image
                src="/quartier-genereux-logo-couleur.svg"
                width="160"
                height="80"
                alt="Quartier Généreux"
              />
            </div>

            <div className={styles.orga}>
              <div>
                Nadia Belaouni,
                <br /> 9<sup>ème</sup> circo
              </div>
              <div>
                {" "}
                Gabriel Blasco,
                <br /> 7ème circo
              </div>
              <div>
                {" "}
                Sylvain Carrière,
                <br /> 8ème circo
              </div>
              <div>
                Magali Crozier,
                <br /> 6ème circo
              </div>
              <div>
                {" "}
                Sébastien Rome,
                <br />
                4ème circo
              </div>
            </div>

            <Image
              src="/fronde/organisateurs-trices.webp"
              width="932"
              height="189"
              alt="Organisateurs et organisatrices de l'évènement : Nadia Belaouni, Gabriel Blasco, Sylvain Carrière, Magali Crozier, Sébastien Rome."
              className={styles.orgaImage}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default FrondePopulaire;
