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
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.root}>
        <header className={styles.header}>
          <div className={`${styles.mainHeader} ${styles.container}`}>
            <div className={styles.date}>30 Novembre</div>
            <Image
              src="/fronde/titre.webp"
              style={{ maxWidth: "100%", height: "auto", margin: "0 auto" }}
              width="1170"
              height="175"
              alt="La Fronde Populaire !"
            />
            <p>
              Dans l’Hérault, organisons la
              <br /> riposte face à l’extrême droite
            </p>
          </div>

          <div className={styles.container}>
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
            <h2>Accueil</h2>
            <h3>Accueil avec Café et autres boissons chaudes à partir de 9h30</h3>
            <br />
            <div className={styles.conferences}>
              <figure>
                <Image
                  src="/fronde/programme/conference.webp"
                  width="500"
                  height="374"
                  alt="Conférence “Montée du RN dans l'Hérault : comprendre le phénomène et l'endiguer”"
                />
              </figure>
            </div>
            <a
              href="https://www.helloasso.com/associations/le-quartier-genereux/evenements/fronde-populaire"
              className={styles.btn}
            >
              Je m&apos;inscris !
            </a>
            <h2>Tables-rondes</h2>
            <div className={styles.tablesRondes}>
              <figure>
                <Image
                  src="/fronde/programme/metropolisation.webp"
                  width="500"
                  height="374"
                  alt="La métropolisation à outrance : le creuset des fractures
                territoriales ?"
                />
              </figure>
              <figure>
                <Image
                  src="/fronde/programme/laicite.webp"
                  width="500"
                  height="374"
                  alt="Instrumentalisation de la laïcité : que faire ? Comment
                en refaire un principe de concorde ?"
                />
              </figure>
              <figure>
                <Image
                  src="/fronde/programme/observatoire.webp"
                  width="500"
                  height="374"
                  alt="Extrême droite dans l'Hérault : « on vous voit ! ». Focus
                sur le projet de l'observatoire de l'extrême droite."
                />
              </figure>
              <figure>
                <Image
                  src="/fronde/programme/ecologie-populaire.webp"
                  width="500"
                  height="374"
                  alt="Construire une écologie populaire face à l'idée d'écologie punitive ?"
                />
              </figure>
              <figure>
                <Image
                  src="/fronde/programme/tiers-lieu.webp"
                  width="500"
                  height="374"
                  alt="Comment monter un tiers lieu vecteur de résistance face à la montée de l'extrême droite."
                />
              </figure>
              <figure>
                <Image
                  src="/fronde/programme/programme.webp"
                  width="500"
                  height="374"
                  alt="Programme du Nouveau Front Populaire : et si on en montrait son applicabilité en commençant par nos communes en 2026 ?"
                />
              </figure>
            </div>
            <h2>Ateliers pratiques</h2>
            <div className={styles.ateliers}>
              <figure>
                <Image
                  src="/fronde/programme/feministe.webp"
                  width="500"
                  height="374"
                  alt="RESISTER EN FEMINISTES : Les droits des femmes font partie des premieres cibles des extrêmes droites au pouvoir. Mais le féminisme représente aussi un outil puissant de lutte contre le fascisme."
                />
              </figure>
              <figure>
                <Image
                  src="/fronde/programme/debattre.webp"
                  width="500"
                  height="374"
                  alt="Comment débattre avec des électeurs du RN ? Théatre Forum POUR DES CONVERSATIONS EFFICACES"
                />
              </figure>
              <figure>
                <Image
                  src="/fronde/programme/visuel-partout.webp"
                  width="500"
                  height="374"
                  alt="Visuels partout, fachos nulle part ! Fabriquer, imprimer et placarder nos valeurs : mode d'emploi."
                />
              </figure>
              <figure>
                <Image
                  src="/fronde/programme/monter-video.webp"
                  width="500"
                  height="374"
                  alt="Monter une vidéo en 15 minutes"
                />
              </figure>
              <figure>
                <Image
                  src="/fronde/programme/photos.webp"
                  width="500"
                  height="374"
                  alt="Savoir prendre des photos pour valoriser nos luttes et modes militants"
                />
              </figure>
              <figure>
                <Image
                  src="/fronde/programme/demarches-citoyennes.webp"
                  width="500"
                  height="374"
                  alt="Les Démarches Citoyennes Locales, une Opportunité pour Lutter contre l’Extrême Droite ? À travers l'exemple de Lunel Collectif, nous verrons comment les démarches citoyennes locales peuvent offrir une alternative à l’extrême droite en répondant aux vraies préoccupations des électeurs."
                />
              </figure>
              <figure>
                <Image
                  src="/fronde/programme/porte-a-porte.webp"
                  width="500"
                  height="374"
                  alt="Lutter contre la mal-inscription pour aller chercher les abstentionnistes : l’exercice du porte à porte "
                />
              </figure>
              <figure>
                <Image
                  src="/fronde/programme/militer-ensemble.webp"
                  width="500"
                  height="374"
                  alt="Comment faire pour militer ensemble quand on se déteste ? (atelier sous réserve)"
                />
              </figure>
              <figure>
                <Image
                  src="/fronde/programme/vss.webp"
                  width="500"
                  height="374"
                  alt="Mettre en place des outils pour prévenir et prendre en charge les violences sexistes et sexuelles dans nos organization (atelier sous réserve)"
                />
              </figure>
            </div>
            <a
              href="https://www.helloasso.com/associations/le-quartier-genereux/evenements/fronde-populaire"
              className={styles.btn}
            >
              Je m&apos;inscris !
            </a>
            <div className={styles.ateliers}>
              <a
                href="https://www.youtube.com/watch?v=Wn4vH0TBTZY"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure>
                  <Image
                    src="/fronde/programme/dab-rozer.webp"
                    width="1080"
                    height="1080"
                    alt="Concert de Dab Rozer"
                  />
                </figure>
              </a>
            </div>

            <a
              href="https://www.helloasso.com/associations/le-quartier-genereux/evenements/fronde-populaire"
              className={styles.btn}
            >
              Je m&apos;inscris !
            </a>
            <div className={styles.col2}>
              <div>
                <h3>🚘 COVOITURAGE</h3>
                <p>
                  En vous inscrivant, vous recevrez un lien pour organiser votre
                  covoiturage (proposer des trajets si vous venez en voiture, en
                  trouvez un si vous n&apos;êtes pas véhiculé·e)
                </p>
                <p>
                  🚴Possibilité de Montpellier d&apos;y aller à Vélo (11km -
                  compter 35 min depuis la Mosson)
                </p>

                <h3>⛳️ ADRESSE</h3>
                <p>
                  <a
                    href="https://maps.app.goo.gl/5ZUaMeRajNbv7u8e6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MACONDO, Montarnaud
                  </a>
                  <br />À Bel air, prendre la route de Murviel les Montpellier
                  (D102), panneau indicateur &ldquo;MACONDO&rdquo; peu après le
                  DOMAINE DES 4 PILAS.
                </p>
              </div>

              <div>
                <h3>🍛🥗 REPAS</h3>
                <p>
                  Un traiteur sera sur place et vendra des plats végétariens et
                  non végétariens pour 8€ midi et soir.
                </p>

                <h3>☕️🍺 BAR & CAFE</h3>
                <p>Assuré par le Quartier Génereux toute la journée.</p>

                <h3>👨‍👩‍👦 GARDERIE MILITANTE</h3>
                <p>
                  Elle sera ouverte toute la journée et jusqu&apos;a 19h. Il
                  faut signaler que vous souhaitez laisser vos enfants lors de
                  votre inscription.
                </p>
              </div>
            </div>
            <div className={styles.ateliers}>
              <a
                href="https://maps.app.goo.gl/5ZUaMeRajNbv7u8e6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <figure>
                  <Image
                    src="/fronde/trouver-macondo.webp"
                    width="1080"
                    height="1080"
                    alt="Carte pour rejoindre Macondo à Montarnaud"
                  />
                </figure>
              </a>
            </div>
            <a
              href="https://www.helloasso.com/associations/le-quartier-genereux/evenements/fronde-populaire"
              className={styles.btn}
            >
              Je m&apos;inscris !
            </a>
            <div className={`${styles.col2} ${styles.footerContainer}`}>
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
                Gabriel Blasco,
                <br /> 7<sup>ème</sup> circo
              </div>
              <div>
                Sylvain Carrière,
                <br /> 8<sup>ème</sup> circo
              </div>
              <div>
                Jean-Louis Roumegas,
                <br /> 1<sup>ère</sup> circo
              </div>
              <div>
                Magali Crozier,
                <br /> 6<sup>ème</sup> circo
              </div>
              <div>
                {" "}
                Sébastien Rome,
                <br />4<sup>ème</sup> circo
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
