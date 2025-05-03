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
        <meta property="og:image" content="/fronde/preview.png" />
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
        <script
          src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
          async
        ></script>
      </Head>
      <div className={styles.root}>
        <header className={styles.header}>
          <div className={`${styles.mainHeader} ${styles.container}`}>
            <div className={styles.date}>le 4 Mai 2025</div>
            <Image
              src="/fronde/titre.webp"
              style={{
                maxWidth: "90%",
                width: 600,
                height: "auto",
                margin: "0 auto",
              }}
              width="1170"
              height="175"
              alt="La Fronde Populaire !"
            />
            <div className={styles.edition}>seconde édition</div>
          </div>

          <div className={styles.container}>
            <div className={styles.lieuEtHeure}>
              <div className={styles.lieu}>
                <RoomIcon />
                Sète - Salle Georges Brassens
              </div>
              <div className={styles.heure}>
                9h30-22h
                <AccessTimeIcon />
              </div>
            </div>
          </div>
        </header>
        <main className={styles.main}>
          <div className={`${styles.container} ${styles.mainContainer}`}>
            <div className={`max-w-4xl mx-auto p-6 space-y-8`}>
              <h1 className="text-4xl font-bold">
                🥁 La Fronde Populaire – 4 mai à Sète
              </h1>
              <p className="text-lg">
                Une journée pour se retrouver, se former, échanger et
                s’organiser face à la montée de l’extrême droite.
              </p>
              <a
                href="https://www.helloasso.com/associations/le-quartier-genereux/evenements/fronde-populaire-2"
                className={styles.btn}
              >
                Je m&apos;inscris !
              </a>

              <section>
                <h2 className="text-2xl font-semibold">📍 Infos pratiques</h2>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Date :</strong> Dimanche 4 mai 2025
                  </li>
                  <li>
                    <strong>Accueil :</strong> à partir de 9h30
                  </li>
                  <li>
                    <strong>Lieu :</strong>{" "}
                    <a href="https://maps.app.goo.gl/wB2GPbdbSEd9w1HE6">
                      Nouvelle Salle Georges Brassin · Sète
                    </a>
                  </li>
                  <li>
                    <strong>Restauration :</strong> sur place le midi
                  </li>
                  <li>
                    <strong>Concert en soirée :</strong> Pitch Up & DJ Adroner !
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">
                  🗣️ Matinée – Plénière d’ouverture
                </h2>
                <div className={styles.conferences}>
                  <figure>
                    <Image
                      src="/fronde/programme-2/conference.png"
                      width="500"
                      height="374"
                      alt="Conférence “Élu·es et électeur·rices du RN : ressemblances et différences”"
                    />
                  </figure>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">
                  🛠️ Après-midi – Ateliers et mises en action
                </h2>

                <div className={styles.ateliers}>
                  <figure>
                    <Image
                      src="/fronde/programme-2/theatre-forum.png"
                      width="500"
                      height="374"
                      alt="Comment débattre avec des électeurs du RN ? Théâtre forum pour des conversations efficaces"
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/fronde/programme-2/on-vous-voit.png"
                      width="500"
                      height="374"
                      alt="Extrême droite dans l'Hérault, on vous voit !"
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/fronde/programme-2/abstention.png"
                      width="500"
                      height="374"
                      alt="Que faire contre l'abstention ? Premier parti de France chez les classes populaires"
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/fronde/programme-2/emotions.png"
                      width="500"
                      height="374"
                      alt="Et toi comment ça va avec tout ça ? Cercle de parole pour prendre soin de son système nerveux, de ses émotions et de ses luttes."
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/fronde/programme-2/programme-NFP.png"
                      width="500"
                      height="374"
                      alt="Quels collectifs en lutte sur le territoire ? Venez rendre visibles vos groupes militants du département ! Pour se rencontrer, créer du lien ou s'engager !"
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/fronde/programme-2/ecologie-populaire.png"
                      width="500"
                      height="374"
                      alt="De la tranquillité publique à la sécurité sanitaire"
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/fronde/programme-2/visuels-partout-fachos-nulle-part.png"
                      width="500"
                      height="374"
                      alt="Visuels partout, fachos nulle part ! fabriquer, imprimer et placarder nos valeurs : mode d'emploi."
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/fronde/programme-2/metropolisation.png"
                      width="500"
                      height="374"
                      alt="Mobilité et transition écologique : construire des solutions exigeantes et cohérentes !"
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/fronde/programme-2/AT-demarches-citoyennes.png"
                      width="500"
                      height="374"
                      alt="Les démarches citoyennes locales : une opportunité pour lutter contre l'extrême droite !"
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/fronde/programme-2/AT-photo.png"
                      width="500"
                      height="374"
                      alt="Réseaux sociaux : les méthodes de l'extrême droite et comment lutter sur la toile ?"
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/fronde/programme-2/AT-video.png"
                      width="500"
                      height="374"
                      alt="La question sociale, rien que la question sociale : comment mener des luttes efficaces sur sa commune, notamment sur le logement ?"
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/fronde/programme-2/panique-fasciste.png"
                      width="500"
                      height="374"
                      alt="Jeu de rôle : « Panique fasciste ». Le pôle Riposte Généreuse du Quartier Généreux propose un jeu collaboratif et immersif pour élaborer des stratégies de résistance face au fascisme, inspirées de situations réelles. "
                    />
                  </figure>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">
                  🎭 Art et culture en soutien
                </h2>

                <div className={styles.ateliers}>
                  <figure>
                    <Image
                      src="/fronde/programme-2/pitch-up.png"
                      width="500"
                      height="625"
                      alt="chanteuse et toasteuse survoltée, Pitch Up évolue depuis plus de 10 ans au sein du groupe de reggae Irie Jahzz. Plus récemment, elle intègre le collectif Women Soldier. En groupe ou en solo, elle rayonne par son énergie communicative et ses textes au service de messages engagés"
                    />
                  </figure>
                  <figure>
                    <Image
                      src="/fronde/programme-2/adroner.png"
                      width="500"
                      height="625"
                      alt="DJ et producteur résident à Sète, Adroner se distingue par des sets éclectiques mêlant afro-house, hip-hop, shatta et drum and bass. évoluant des scènes locales aux dancefloors de Brooklyn et Londres, Il crée son émission radio Shook Twice et fonde la plateforme Grow Underground, dédiée à la promotion de la scène musicale émergente"
                    />
                  </figure>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">🧭 Pourquoi venir ?</h2>
                <p>
                  Parce qu’on est plus fort·es ensemble.
                  <br />
                  Parce que la montée de l’extrême droite n’est pas une
                  fatalité.
                  <br />
                  Parce que nous avons des savoirs, des envies, des expériences
                  à partager.
                  <br />
                  Et surtout, parce qu’on veut organiser l’espoir.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold">
                  👉 Rejoignez La Fronde Populaire !
                </h2>

                <a
                  href="https://www.helloasso.com/associations/le-quartier-genereux/evenements/fronde-populaire-2"
                  className={styles.btn}
                >
                  Je m&apos;inscris !
                </a>
              </section>
            </div>
          </div>
          {/*<div className={`${styles.container} ${styles.mainContainer}`}>
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
          </div>*/}
        </main>
      </div>
    </>
  );
};

export default FrondePopulaire;
