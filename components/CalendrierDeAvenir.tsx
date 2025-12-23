"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

import style from "./calendrier.module.css";

interface CalendrierAvenir {
  question: ReactNode;
  answer: ReactNode;
}

const content: CalendrierAvenir[] = [
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on attribuait les logements
        au tirage au sort ?
      </p>
    ),
    answer: (
      <>
        <p>
          Difficile de trouver un logement proche de son lieu de travail, adapté
          à sa situation familiale et accessible à son budget ?
        </p>
        <p>
          C’est normal, avec 50 % des logements en location détenus par
          seulement 3 % des propriétaires, la pierre est un investissement
          rentable privant chacun et chacune à l’accès à un logement abordable,
          surtout si ces personnes ne sont pas des des hommes cis blancs.
        </p>
        <p>
          La crise du logement est due à une pénurie artificialisée par la
          spéculation. Dans plein d’autres domaines, les pénuries sont gérées
          par le tirage au sort (comme pour les places aux épreuves des jeux
          olympiques), alors pourquoi pas les logements ?
        </p>
        <p>
          Même la Bible recommandait un partage des terres par le tirage au
          sort ! « La terre sera partagée par têtes entre ces hommes, pour
          qu&apos;ils la possèdent. Aux plus nombreux, tu donneras les plus
          fortes parts, et aux moins nombreux des parts moindres, chacun selon
          le recensement aura sa part d&apos;héritage. La terre sera partagée au
          sort par chaque tête ; on tirera les sorts par tribus paternelles. Tu
          leur distribueras leur héritage par la voie du sort, quel que soit le
          nombre de la tribu. ». Nombres - 26 – 53-56.
        </p>
        <p>Qui a dit que Jésus n’était pas woke ?</p>

        <p>
          Conseils lecture :
          <ul>
            <li>
              <a
                href="https://www.radiofrance.fr/franceculture/podcasts/serie-un-temps-a-coucher-dehors"
                rel="noopener noreferrer"
              >
                « Un temps à coucher dehors », Podcast France culture
              </a>
            </li>
            <li>
              <a
                href="https://www.povertyactionlab.org/evaluation/housing-lottery-increase-demand-formal-government-housing-and-improve-welfare-ethiopia?hl=fr-FR"
                rel="noopener noreferrer"
              >
                Programme de logement 40/60 en Ethiopie et même un essai de
                loterie pour résoudre la crise du logement éthiopienne
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on vivait sans chef·fe ?
      </p>
    ),
    answer: (
      <>
        <p>
          Sacrée question tant nous sommes habitué·es à nos présidents de la
          République, de régions, de départements, d’exécutifs locaux, nos
          présidents directeurs généraux d’entreprises, nos patrons, nos rois.
          Et n’y voyez pas un hasard s’ils sont déclinés au masculin !
        </p>
        <p>
          Et si, on imaginait une société française sans chefs ? Souvent nous
          plions le débat par un laconique « c’est utopique » ou nous résignons
          à « c’est un futur très lointain ».
        </p>

        <p>
          Et pourtant, le sujet n’est pas de savoir si c’est possible… car c’est
          possible, puisque ça existe ! Des études archéologiques et
          ethnologiques nous apprennent aujourd’hui que les sociétés sans chef
          existent et ont existé. Et que l’humanité a vécu bien plus longtemps
          sans État qu’avec !
        </p>

        <p>
          En ce 2 décembre, 174 ans après le coup d’État de Napoléon III qui mit
          fin à la Deuxième République, il est temps de couper symboliquement
          des têtes pour l’instauration d’une vraie démocratie par le peuple et
          pour le peuple.{" "}
        </p>

        <p>C’est parti pour la Révolution ?</p>
        <p>
          Pour aller plus loin :
          <ul>
            <li>
              <a
                href="https://www.editionslesliensquiliberent.fr/livre-Au_commencement_%C3%A9tait-672-1-1-0-1.html"
                rel="noopener noreferrer"
              >
                Au commencement était… Une nouvelle histoire de l&apos;humanité
                - David GRAEBER &amp; David WENGROW
              </a>
            </li>
            <li>
              <a
                href="https://www.editionspoints.com/ouvrage/zomia-ou-l-art-de-ne-pas-etre-gouverne-james-c-scott/9782757878231"
                rel="noopener noreferrer"
              >
                Zomia ou l&apos;art de ne pas être gouverné - James C. Scott
              </a>
            </li>
            <li>
              <a
                href="https://www.leseditionsdeminuit.fr/livre-La_Soci%C3%A9t%C3%A9_contre_l%E2%80%99%C3%89tat-1999-1-1-0-1.html"
                rel="noopener noreferrer"
              >
                La Société contre l’État - Pierre Clastres
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on permettait aux
        agriculteur·ices de vivre dignement ?
      </p>
    ),
    answer: (
      <>
        <p>
          Aujourd’hui, 18 % des agriculteurs et agricultrices vivent sous le
          seuil de pauvreté. Leurs conditions de travail sont toujours plus
          difficiles : 7 jours sur 7, pas ou peu de vacances pour des revenus
          tirés vers le bas par l’industrie agro-alimentaire. Or, paysans et
          paysannes sont indispensables à nos sociétés, ils produisent notre
          nourriture tout en modelant les paysages et la biodiversité aux abords
          de leurs exploitations.
        </p>
        <p>
          Et si le secteur public s’investissait également dans le secteur
          agricole ? Des communes pourraient reprendre et dynamiser des fermes à
          l’arrêt faute de repreneurs… D’autres pourrait décider d’en créer de
          nouvelles pour répondre à des enjeux locaux : limiter
          l’artificialisation des sols et créer des bulles de fraîcheurs en
          zones urbaines, diversifier les productions locales pour contribuer à
          une alimentation en circuit court dans les grandes zones de
          monoculture, etc.
        </p>
        <p>
          Il existe des modèles où l’agriculture ne se résume pas à
          l’exploitation des agriculteurs par l’industrie agroalimentaire, où
          les collectivités locales se muent en productrices de l’alimentation
          de leur territoire et où les paysans et paysannes peuvent mieux vivre
          de leur métier.
        </p>
        <p>
          Des projets existent déjà, en 2024, le portail France PAT (Projets
          Alimentaires Territoriaux) recensait 48 fermes existantes ou en
          projet.
        </p>
        <p>
          Alors, prêt⋅es à changer d’échelles et à doter chaque collectivité de
          services agricoles ?
        </p>

        <p>
          Resources :
          <ul>
            <li>
              <a
                href="https://france-pat.fr/outil/repertoire-national-des-fermes-maraicheres-municipales-intercommunales-et-departementales/"
                rel="noopener noreferrer"
              >
                Répertoire national des fermes maraîchères municipales,
                intercommunales et départementales
              </a>
            </li>
            <li>
              <a
                href="https://www.marabout.com/livre/il-est-ou-le-patron-9782501146845/"
                rel="noopener noreferrer"
              >
                Il est où le patron ? - Maud Bénézit & Les paysannes en polaire
              </a>
            </li>
            <li>
              <a
                href="https://www.arteradio.com/son/paysannes-en-lutte-1-2"
                rel="noopener noreferrer"
              >
                Paysannes en lutte - Charlotte Bienaimé - Podcast Arte Radio
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> nous étions tous·tes
        actionnaires ?
      </p>
    ),
    answer: (
      <>
        <p>
          Une entreprise rentable mais pas assez, fermée sous pression des
          actionnaires pour augmenter la rentabilité de son capital… ça vous dit
          quelque chose ? Cette histoire se répète malheureusement trop
          souvent : Bledina à Villefranche, Goodyear à Amiens, Michelin à
          Cholet, Sonco à Laon, Danone à Calais…{" "}
        </p>
        <p>
          Pourtant d’autres modèles dans lesquels le pouvoir décisionnel change
          de main sont possibles. En permettant aux salariés de détenir leur
          outil de travail et en instaurant une vraie démocratie –{" "}
          <i>une personne une voix</i> – au sein des assemblées générales
          d’entreprise, les SCOP sont un exemple d’entreprises préservées
          d’investisseurs prédateurs.
        </p>
        <p>
          En associant bénéficiaires, salariés, pouvoirs publics, fournisseurs,
          les SCIC sont un autre exemple d’entreprises vertueuses pour le bien
          commun.{" "}
        </p>
        <p>
          Un autre monde est possible dans lequel activité économique ne rime
          pas forcément avec enrichissement du capital.{" "}
        </p>
        <p>Alors prêt·es à détenir les moyens de production ?</p>
        <p>
          Resources :
          <ul>
            <li>
              <a
                href="https://www.radiofrance.fr/franceculture/podcasts/entendez-vous-l-eco/scop-les-salaries-au-pouvoir-4688813"
                rel="noopener noreferrer"
              >
                &quot;SCOP&quot; : les salariés au pouvoir ! - Podcast France
                Culture
              </a>
            </li>
            <li>
              <a href="https://www.les-scop.coop/" rel="noopener noreferrer">
                www.les-scop.coop
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on diminuait la production
        de soja ?
      </p>
    ),
    answer: (
      <>
        <p>
          Contrairement à ce que les fans de barbecue revendiquent, les mangeurs
          d’herbes ne sont pas le problème de la sur-production de soja.
          Aujourd’hui, près des ¾ du soja produit dans le monde sont utilisés
          pour nourrir les animaux, notamment la volaille, le porc, les poissons
          d&apos;élevage, etc. Il faut par exemple 575g de soja pour faire un
          kilo de poulet ou 273g de soja pour un kilo de viande porcin. Alors
          c’est qui les bouffeurs de graines ?
        </p>
        <p>
          Pourquoi est-ce un problème ? La production de soja est la principale
          cause de déforestation en Amérique du Sud. Chaque année, ce sont
          10 000km² de forêt qui disparaissent au Brésil, soit l&apos;équivalent
          de la superficie du Liban. Et si on admettait enfin que manger une
          côte de bœuf bio et élevée en plein air est plus coûteux pour la
          planète qu’un steak de soja, même importé.
        </p>
        <p>
          Encore une fois, l’agro-industrie mondialisée fait tout pour détruire
          la planète en toute légalité et en toute opacité. La chasse, la pêche,
          les traditions désuètes, tout ceci a pour conséquence près de 10 % des
          émissions de gaz à effets de serre, l’effondrement de la biodiversité,
          la déforestation, la destruction des fonds marins, la pollution des
          sols et cours d’eau.
        </p>
        <p>
          Est-ce que tu t’es déjà demandé si manger était politique ? Il est
          temps de questionner et de revenir à une production locale, directe,
          qui permet la juste rémunération des agriculteur.ices, qui ne soit pas
          opaque ni transformée !
        </p>
        <p>
          Pour aller plus loin :
          <ul>
            <li>
              <a
                href="https://www.nouriturfu.com/nos-livres/steaksisme"
                rel="noopener noreferrer"
              >
                Steaksisme - Nora Bouazzouni
              </a>
            </li>
            <li>
              <a href="https://www.reseau-amap.org/" rel="noopener noreferrer">
                reseau-amap.org/
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/playlist?list=PL4Moa23T0v8Ha2ThYabvNPL1SWehbDSKb"
                rel="noopener noreferrer"
              >
                BOUFFE DE LÀ - Podcast - Nora Bouazzouni
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on ne laissait personne
        dormir dehors ?
      </p>
    ),
    answer: (
      <>
        <p>
          La politique “le logement d&apos;abord” considère qu&apos;un logement
          sûr et stable est un préalable aux besoins de tout être humain.
          Lorsqu’on a un toit, il devient beaucoup plus facile de prendre soin
          de sa santé, de se nourrir, d’avoir emploi...
        </p>
        <p>
          Le gouvernement norvégien accompagne financièrement cette politique,
          les collectivités et les ONG la mettent en œuvre.
        </p>
        <p>
          En France, depuis 2012, le nombre de sans-abris a plus que doublé pour
          atteindre 350 000 personnes. Alors qu’il y a 3,1 millions de logements
          vacants en France, 753 personnes sans-abris sont décédées en 2024 .
        </p>
        <p>Alors, prêt·es à lâcher ta résidence secondaire ?</p>
        <p>
          Pour aller plus loin :
          <ul>
            <li>
              <a
                href="https://www.micros-rebelles.fr/site/radio/podcasts/pour-un-droit-au-logement-et-a-lhebergement-pour-toutes-et-tous"
                rel="noopener noreferrer"
              >
                Pour un droit au logement et à l’hébergement pour toutes et tous
                ! - Podcast - Micros Rebelles
              </a>
            </li>
            <li>
              <a
                href="https://www.fondationpourlelogement.fr/reml-2025/"
                rel="noopener noreferrer"
              >
                www.fondationpourlelogement.fr
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on cassait les machines ?
      </p>
    ),
    answer: (
      <>
        <p>
          La promesse est belle ! La technologie et notamment l’IA nous
          permettra de gagner en productivité, de nous assister dans nos tâches
          du quotidien voire d’optimiser la majorité des processus industriels.
          L’envers du décors est pourtant loin d’être rose.
        </p>

        <p>
          <b>L’IA, c’est une catastrophe écologique !</b>
          <br />
          La course à l’IA la plus performante suppose la construction de
          milliers de datacenter partout autour du monde. Chacun de ces centres
          de données consomme des quantités incroyable d’électricité obligeant
          les majors de l’informatiques investir dans la construction de
          centrales à gaz, charbons, nucléaires… Qui dit puissance maximale, dit
          nécessité de refroidir les infrastructures avec de l’eau. Une enquête
          du média Bloomberg montrait que 72 % des centres de données construits
          depuis 2022 ou en construction sont positionnés dans des zones en
          stress hydrique important ou critique. La tension sur l’usage de l’eau
          s’annonce maximale comme de récents conflits aux Pays Bas, aux
          États-Unis au Chili ou en Urugay Qui dit puissance maximale dit aussi
          infrastructure d’alimentation électrique. La construction des des
          infrastructures et les besoins en cuivre associés fait peser un risque
          sur l’ensemble de la filière cuivre mondiale.
        </p>
        <p>
          <b>L’IA est biaisée comme jamais !</b>
          <br />
          L’IA est une machine statistique qui cherche à reproduire le résultat
          le plus probable à partir des corrélations trouvées dans ces données
          d’entraînement. Entraînée avec des données sexistes, racistes,
          validistes, l’IA produira des résultats sexistes, racistes et
          validistes. L’exemple de l’IA de recrutement d’Amazon qui ne
          sélectionnait que des hommes, celles de traduction utilisant le terme
          « nigger » pour désigner un jouet noir ou encore l’automatisation des
          contrôles de la CAF qui sur évalue la fraude des mères racisées et
          élevant leurs enfants seules en sont des parfaits exemples.
        </p>
        <p>
          <b>L’IA est une bulle financière prête à éclater</b>
          <br />
          L’IA fait couler de l’encre à chaque annonce tonitruante d’un éditeur,
          amuse la galerie lorsqu’il s’agit de publier son portait dans le style
          de Miyazaki, mais surtout l’IA ne rapporte aujourd’hui pas d’argent.
          OpenAI perd des sommes phénoménales d’argent sur la promesse qu’un
          jour une majorité des habitants du globe seront prêts à payer cher
          pour utiliser ses services. Des boucles d’investissements et promesses
          d’achats circulaires entre grande major du secteur (j’investis des
          milliards dans ton entreprise si tu m’achètes des milliards de
          matériel) ont été documenté laissant imaginer une éclatement prochain
          de la bulle. Pour trouver des modèles rentables, OpenAI et Meta se
          lancent dans des réseau sociaux où l’enjeu est de capter des
          utilisateurs dans un scroll infini de vidéo générées par IA (vous avez
          dit SLOP ?) pour vendre de la publicité.
        </p>
        <p>Pour toi, l’IA, une technologie libératrice ou aliénante ? </p>
        <p>
          Pour aller plus loin :
          <ul>
            <li>
              <a
                href="https://affordance.framasoft.org/2025/11/le-web-pourrissant-et-lia-florissante-si-nous-sommes-le-bruit-qui-sera-la-fureur/"
                rel="noopener noreferrer"
              >
                Le web pourrissant et l’IA florissante. Si nous sommes le bruit,
                qui sera la fureur ? - Olivier Ertzscheid
              </a>
            </li>
            <li>
              <a
                href="https://www.lemonde.fr/economie/article/2025/06/01/data-centers-et-intelligence-artificielle-la-course-au-gigantisme_6609751_3234.html"
                rel="noopener noreferrer"
              >
                Data centers et intelligence artificielle : la course au
                gigantisme - Le Monde
              </a>
            </li>
            <li>
              <a
                href="https://www.bloomberg.com/graphics/2025-ai-impacts-data-centers-water-data/"
                rel="noopener noreferrer"
              >
                AI is draining water from areas that need it most - Bloomberg
                (L&apos;IA draine l&apos;eau des régions qui en ont le plus
                besoin)
              </a>
            </li>
            <li>
              <a
                href="https://next.ink/podcast/algorithmique-2-6-biaise-comme-lia/"
                rel="noopener noreferrer"
              >
                Biaisé comme l’IA - Podcast Next.ink
              </a>
            </li>
            <li>
              <a
                href="https://www.amnesty.org/fr/latest/news/2021/10/xenophobic-machines-dutch-child-benefit-scandal/"
                rel="noopener noreferrer"
              >
                Enquête Amnesty internationale sur les algorithmes racistes sur
                les contrôle des allocations familiales aux Pays Bas
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on était rémunéré selon
        l’utilité de son métier ?
      </p>
    ),
    answer: (
      <>
        <p>
          En 2020, la crise du Covid a souligné la vulnérabilité de notre
          société et a permis de rappeler l’importance, voir la nécessité, de
          celles et ceux appelés « la première ligne ». Eboueur·euse,
          couducteur·ice de transports en commun, caissier·ère, boulanger·ère,
          aide soignant·e, enseignant·e, ouvrier·ère agricole… autant de métier
          indispensable au fonctionnement de la société. Or, le constat est là,
          ce sont des métiers précaires. Alors, pourquoi nos salaires ne
          sont-ils pas proportionnels à leur utilité sociale ? Préférez-vous une
          société sans soignant·es ou sans avocat·es fiscalistes ? Préférez vous
          une société sans éboueur·euses ou sans chef·fe de projet ?
          Préférez-vous une société sans agriculteurs·rices ou sans
          consultant·e ?
        </p>
        <p>
          Et vous ? Arrivez-vous à expliquer ce que votre travail apporte à
          l’intérêt général ? En fonction des réponses à ces questions, quel
          salaire vous attribueriez-vous ?
        </p>

        <p>
          Conseil lecture :
          <ul>
            <li>
              <a
                href="https://www.editionslesliensquiliberent.fr/livre-Bullshit_Jobs-578-1-1-0-1.html"
                rel="noopener noreferrer"
              >
                Bullshit Jobs - David GRAEBER
              </a>
            </li>
            <li>
              <a
                href="https://www.gaite-lyrique.net/plein-ecran/contenu/peut-on-vraiment-travailler-et-etre-heureuxse"
                rel="noopener noreferrer"
              >
                Peut-on vraiment travailler et être heureux·se ? - Podcast avec
                Camille Teste sur Binge Audio « Encore heureux »
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> l’échec scolaire devenait
        une réussite ?
      </p>
    ),
    answer: (
      <>
        <p>
          L’École républicaine a pour beau projet la réussite de toutes et tous,
          en valorisant l’égalité des chances, quelle que soit l’origine
          sociale. Or, notre école est aujourd’hui une machine au mérite et
          malheureusement l’ascenseur social est cassé. L’égalité des chances ne
          permet pas de dépasser Rootles inégalités sociales de départ et
          l’école reproduit ces inégalités : 55 % des jeunes dont les parents
          sont cadres ou de professions intermédiaires ont un diplôme bac+2 ou
          plus, contre seulement 24 % des jeunes dont les parents sont ouvriers
          et employés.
        </p>
        <p>
          Ainsi, « Quand on veut on peut » relève davantage d’une
          auto-justification des classes dominantes que de la possibilité
          offerte par l’école de permettre d’ouvrir le champ des possibles à
          toustes. La réussite scolaire, puis professionnelle n’est pas le
          résultat de compétences acquises, mais bien le résultat de critères
          déterminés par une classe dominante.
        </p>
        <p>
          Et si on imaginait une société sans mérite, où chacun peut être
          reconnu en dehors de ces critères établis ? Et si on valorisait
          différemment nos parcours, nos valeurs, nos engagements ?
        </p>
        <p>
          Pour aller plus loin :
          <ul>
            <li>
              <a
                href="https://www.editions-delcourt.fr/bd/series/serie-la-distinction/album-la-distinction"
                rel="noopener noreferrer"
              >
                La Distinction - Tiphaine Rivière
              </a>{" "}
              · BD inspirée des notions sociologiques élaborées par Pierre
              Bourdieu
            </li>
            <li>
              <a
                href="https://www.seuil.com/ouvrage/ascendant-beauf-rose-lamy/9782021596069"
                rel="noopener noreferrer"
              >
                Ascendant beauf - Rose Lamy
              </a>{" "}
              ou en podcast{" "}
              <a
                href="https://www.arteradio.com/son/chacun-son-beauf"
                rel="noopener noreferrer"
              >
                Chacun son beauf : à quoi sert le mépris de classe ?
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> au lieu de punir on
        réparait ?
      </p>
    ),
    answer: (
      <>
        <p>
          Le système carcéral est aujourd’hui à bout de souffle : pas assez de
          places malgré des constructions de prisons continues (25 000 places de
          prisons depuis les années 90), cellules insalubres, non accompagnement
          à la réintégration sociale et professionnelle, récidives, une justice
          classiste et raciste...
        </p>
        <p>
          En 1981, qui aurait pu prédire l’abolition de la peine de mort ?
          Aujourd’hui, on ne reviendrait pas sur cette loi fondamentale.
          Peut-être est-il le temps aujourd’hui de construire une société sans
          prison ? En 2020, le taux de récidive 1 an après la sortie était de
          48,3 %...
        </p>
        <p>
          Il existe d’autres façons de prendre en charge et de réhabiliter les
          condamnés, notamment par les justices communautaires.
        </p>
        <p>
          Voici un exemple  de justice réparatrice (pour la blague ! Mais
          pourquoi pas ?) : Sarkozy pourrait peut-être faire un stage de
          citoyenneté, et verser, en réparation, l’argent volé à l’État, dans
          les caisses de la sécurité sociale.
        </p>
        <p>Prêt·es à mettre fin aux prisons ?</p>
        <p>
          Conseils lecture :
          <ul>
            <li>
              <a
                href="https://lafabrique.fr/faire-justice/"
                rel="noopener noreferrer"
              >
                Faire justice - Elsa Deck Marsault
              </a>
            </li>
          </ul>
        </p>

        <div style={{ aspectRatio: "16/9", width: "100%" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://video.davduf.net/videos/embed/s6KkAsavc8AmECWMBZtfUF"
            title="Une justice (restaurative) juste? Avec Coline Zuber et Noémie Micouletr"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> un·e français·e, c’était
        tout simplement toutes personnes vivant en France
      </p>
    ),
    answer: (
      <>
        <p>
          Au lieu de jouer à qui sera le plus français·e, à comparer nos
          généalogies et nos ascendances, à rivaliser de critères pour la
          nationalité, et si on en restait à ce principe simple : un·e
          français·e, c’est quelqu’un·e qui vit en France. Point.
        </p>
        <p>
          Pour faire collectif et société, la couleur de peau, les origines, la
          religion ne sont pas des critères. La France pure sang n’existe pas,
          mais surtout : elle n’a jamais existé !
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on changeait radicalement
        notre vision de nos enfants ?
      </p>
    ),
    answer: (
      <>
        <p>
          Les chiffres sont effrayants :
          <ul>
            <li>3 enfants par classe sont victimes de violence, </li>
            <li>1 enfant sur 2 est frappé avant l’âge de deux ans, </li>
            <li>
              85 % des enfants ont subi des violences éducatives ordinaires
              (physique, verbale ou psychique).{" "}
            </li>
          </ul>
        </p>
        <p>
          Les enfants sont des êtres vulnérables qui subissent de la violence au
          quotidien : non écoutés, mis à l’écart, humiliés… Ils obéissent aux
          règles établies par les adultes dans une société pour les adultes. Le
          rapport aux adultes est un rapport de domination.
        </p>
        <p>
          Et si, on imaginait une société à hauteur d’enfants, où les enfants
          étaient vraiment écoutés et respectés pour ce qu’ils et elles sont et
          non pas selon ce que les adultes imaginent ?{" "}
        </p>
        <p>
          Et si nous arrêtions de vouloir des espaces, des restaurants, des
          trains sans enfants ? Et si nous arrêtions de blâmer les parents - les
          mères - et participions collectivement à faire grandir les enfants
          sans jugements ? Et si nous proposions plus de places en crèche, plus
          de solutions de garde pour prendre en charge nos enfants ? Et si on
          divisait les classes par deux pour accompagner et faire réussir nos
          enfants dans les meilleures conditions possibles ?
        </p>
        <p>
          Alors, prêt·es à reconnaître tes privilèges d’adultes et la domination
          que tu exerces sur les enfants ?
        </p>
        <p>
          Resources :
          <ul>
            <li>
              <a
                href="https://www.instagram.com/marion_cuerq/"
                rel="noopener noreferrer"
              >
                Marie Cuerq
              </a>
            </li>
            <li>
              <a
                href="https://www.radio.fr/podcast/qui-cest-qui-commande"
                rel="noopener noreferrer"
              >
                Podcast « Qui c&apos;est qui commande ? » - Lolita Rivé
              </a>
            </li>
            <li>
              <a
                href="https://boutique.binge.audio/products/proteger-nos-enfants-gabrielle-richard"
                rel="noopener noreferrer"
              >
                Protéger nos enfants - Gabrielle Richard
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on arrêtait d’obéir ?
      </p>
    ),
    answer: (
      <>
        <p>
          Zyed Benna et Bouna Traoré (27/10/2005), Rémi Fraisse (26/10/2014),
          Adama Traoré (19/07/2016), Zineb Redouane (2/12/20218), Nahel Merzouk
          (27/06/2023)...
        </p>
        <p>
          S’ajoutent à cette liste de nombreux·ses autres mort·es et blessé·es à
          cause d’interventions autoritaristes, violentes et souvent empruntes
          de discriminations des forces de l’ordre.
        </p>
        <p>
          Entre les violences, la chasse aux personnes étrangères, les contrôles
          au faciès, les manifesations réprimées, la mission de la police et de
          la gendarmerie est claire : maintenir la population en respect afin
          qu’elle ne se révolte pas.
        </p>
        <p>Faisons-les échouer.</p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on retirait notre argent des
        banques ?
      </p>
    ),
    answer: (
      <>
        <p>
          Livret de développement durable et solidaire, Plan épargne logement,
          contrat d&apos;assurance vie... Que devient notre argent
          lorsqu&apos;il est placé dans une banque ? La majorité des banques ne
          sont pas transparentes derrière leurs usages des fonds récoltés.
        </p>
        <p>
          Avec une assurance vie, la banque achète des actions et cherche la
          rentabilité à tout prix pour verser vos intérêts. C’est pourquoi les
          banques cherchent à améliorer la valeur des actions et la pression des
          actionnaires fait délocaliser des usines ou en fermer d’autres pas
          assez rentable.
        </p>
        <p>
          Pourtant des alternatives existent. Par exemple, la banque coopérative
          La Nef utilise vos économies pour soutenir exclusivement des projets
          dans les secteurs de l&apos;écologie, du social ou de la culture. Il
          est aussi possible de directement soutenir des coopératives en
          finançant des parts sociales ou des titres participatifs.
        </p>
        <p>Alors, prêt·es à faire tomber le système bancaire ?</p>
        <div style={{ aspectRatio: "16/9", width: "100%" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/XT3vXtOCeSs"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> ton voisin n’était pas le
        problème
      </p>
    ),
    answer: (
      <>
        <p>
          Vidéo surveillance, propriété privée affiché en grand, quartiers
          privés et fermés, dispositif voisins vigilants… Les années passent et
          les initiatives pour se protéger de l’autre foisonnent. Que cet autre
          soit ton voisin, les jeunes du quartier d’à côté, une communauté du
          voyage de passage, le principe est toujours le même : considérer
          l’autre comme l’origine de nos petites et grandes galères du
          quotidien.
        </p>

        <p>
          Si toi, comme l’autre, que tu accuses parfois de responsable, vivez
          ces mêmes galères, c’est parce que l’augmentation continue des
          inégalités met en péril la possibilité pour tous et toutes de vivre
          dignement. En 2024, le patrimoine des 500 plus grandes fortunes
          française a dépassé les 1200 milliards d’euros tandis que le taux de
          pauvreté est en augmentation continue depuis les années 2000. C’est ce
          que montre le chercheur Richard Wilkinson, épidémiologiste social,
          dans ces travaux sur les inégalités. Les pays les moins inégalitaires
          sont aussi les pays dans lesquels la population est en meilleure
          santé, où les habitants sont les plus heureux, où les taux de
          criminalité sont les plus faibles…
        </p>

        <p>Alors, on s’attaque aux vrais responsables de tous nos maux ?</p>

        <p>
          Resources :
          <ul>
            <li>
              <a
                href="https://emmaclit.com/2025/11/14/les-assistes/"
                rel="noopener noreferrer"
              >
                Les assistés - Emma
              </a>
            </li>
            <li>
              <a
                href="https://www.editionslesliensquiliberent.fr/livre-Pour_vivre_heureux,_vivons_%C3%A9gaux_!-9791020906700-1-1-0-1.html"
                rel="noopener noreferrer"
              >
                Pour vivre heureux, vivons égaux ! - Kate Pickett &amp; Richard
                Wilkinson
              </a>{" "}
              <br /> Comment l&apos;égalité réduit le stress, préserve la santé
              mentale et améliore le bien-être de tous
            </li>
          </ul>
        </p>
        <div style={{ aspectRatio: "16/9", width: "100%" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yUbLvxLED_4?si=wX9xyaJa19uH1FO8"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> faire ma lessive
        arrondissait mes fins de mois ?
      </p>
    ),
    answer: (
      <>
        <p>
          Le « travail domestique » représente les tâches que nous effectuons
          nous même et qui peut être remplacé par des services payants (ménage,
          garde d’enfants, courses, lessive…). En France, ce travail qui rend
          service gratuitement à nos proches ainsi qu’à nous même est équivalent
          à 2 fois le temps de travail rémunéré total de tous les
          travailleurs.euses sur l’année. Valoriser le travail domestique au
          SMIC aurait pour conséquence une hausse de 33 % du PIB, selon l’INSEE.{" "}
        </p>
        <p>
          En France ce travail domestique est majoritairement effectué par des
          femmes : 68% en 2020 déclarent s’occuper du ménage et de la cuisine
          tous les jours contre 43 % des hommes. Le partage des tâches du
          quotidien (soins aux autres, organisation de la maison) est par 2/3
          pris en charge par les femmes. Et pendant que les femmes s’occupent de
          la maison et des enfants, elles ne travaillent pas et ne gagnent pas
          d’argent, elles ne prennent pas du temps pour leurs soins, ni ne
          peuvent développer d’autres compétences...
        </p>
        <p>
          Sans oublier que les femmes sont plus nombreuses à être à temps
          partiel et que les inégalités salariales persistent toujours. Le
          couple appauvrit les femmes
        </p>
        <p>
          Et si, on considérait ce temps domestique comme un temps de travail
          rémunéré et qu’on reconnaissait le manque à gagner des femmes ?{" "}
        </p>
        <p>
          Pour aller plus loin :
          <ul>
            <li>
              <a
                href="https://www.glenat.com/glenat-bd/larnaque-des-nouveaux-peres-9782344060186/"
                rel="noopener noreferrer"
              >
                L&apos;arnaque des nouveaux pères - Enquête sur une révolution
                manquée - BD - Stéphane Jourdain, Guillaume Daudin &amp; Antoine
                Grimée
              </a>
            </li>
            <li>
              <a
                href="https://www.slate.fr/audio/rends-largent/"
                rel="noopener noreferrer"
              >
                Podcast « Rends l&apos;argent » - Titiou Lecoq
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> les trains étaient
        gratuits ?
      </p>
    ),
    answer: (
      <>
        <p>
          « Vous avez choisi le moyen de transport le plus écologique » dit la
          voix dans le train, malheureusement, c’est également le transport le
          moins économique ! Cherchez un billet d’avion moins cher que le train,
          vous ne trouverez presque jamais. Comment justifier aujourd’hui, à
          l’heure d’une extinction de masse et de la crise écologique que le
          train ne soit pas plus subventionné quand l’avion l’est massivement ?
          Comment justifier que l’argent public paye le bitume des
          infrastructures routières alors que réseau ferré de France doit
          pourvoir à l’essentiel de ses investissements, impactant les prix des
          billets ?{" "}
        </p>
        <p>
          Réchauffement climatique, disparition des espèces, pollution des eaux
          et des sols, épuisement des ressources naturelles, déforestation,
          zones inhabitables, impacts sur la santé… Depuis les années 70, les
          scientifiques alertent sur les dangers de notre industrialisation et
          notre consommation. Les petits gestes ne pourront pas changer la
          trajectoire et culpabilisent plus qu’ils n’amène de transformations
          structurelles. Il est temps qu’une politique radicale et décroissante
          nous propose enfin des avenirs moins consommateurs de ressources et
          désirables.
        </p>

        <p>Alors, prêt·es à dézinguer les jets des milliardaires ?</p>

        <p>
          Pour aller plus loin :
          <ul>
            <li>
              <a
                href="https://bonpote.com/pourquoi-lavion-est-moins-cher-que-le-train-en-europe-et-comment-y-remedier/"
                rel="noopener noreferrer"
              >
                Pourquoi l’avion est moins cher que le train en Europe (et
                comment y remédier) ? · Bon pote
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on cramait tout
      </p>
    ),
    answer: (
      <>
        <p>
          Malheureusement, on a déjà bien commencé ! Depuis 1970 les
          températures surchauffent et les méga-feux couvrent la planète !
        </p>

        <p>
          Et si, au lieu de brûler la planète on cramait le système ? Le système
          capitaliste ! Les plus grandes richesses accumulent toujours plus, se
          transmettent leur patrimoine par héritage, achètent des médias pour
          asseoir leur idéologie rance et tissent des réseaux de pouvoirs avec
          les dirigeants du monde entier. Police et justice les protègent alors
          que nous, on prend de la prison ferme pour un jet de peinture sur
          Matignon et on nous fait la guerre à Saint Soline !
        </p>
        <p>
          De l’argent pour financer des services publics de qualité et
          réorienter les trajectoire écologique de la planète, il y en a.
        </p>
        <p>Alors prêt·es à saboter et détruire le capitalisme ?</p>

        <p>
          Pour aller plus loin :
          <ul>
            <li>
              <a
                href="https://www.france.tv/france-2/cash-investigation/7790973-bernard-arnault-ombre-et-lumiere-d-un-empire.html"
                rel="noopener noreferrer"
              >
                Bernard Arnault, ombre et lumière d&apos;un empire · Cash
                Investigation
              </a>
            </li>
            <li>
              <a
                href="https://audreyvernon.com/spectacles/comment-epouser-un-milliardaire-11"
                rel="noopener noreferrer"
              >
                Spectable « Comment épouser Un Milliardaire » · Audrey Vernon
              </a>
            </li>
          </ul>
        </p>
        <div style={{ aspectRatio: "16/9", width: "100%" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/PnycyKCg1Wk"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on prenait soin des autres ?
      </p>
    ),
    answer: (
      <>
        <p>
          Génocides en cours, actes de haine qui prospèrent, multiplications de
          répressions violentes, exploitations des êtres humain.es, guerres...
          L’humanité se déchire au profit de quelques-uns qui accaparent les
          richesses en se moquant du sort de leurs semblables.
        </p>
        <p>
          La violence est partout, tout le temps, qu’elle soit physique,
          verbale, psychique ou symbolique. Cette violence symbolique
          caractérisé par les injustices sociales et le mépris de celleux qui
          ont le pouvoir doit être combattue.
        </p>
        <p>
          Nos propres privilèges et les mécanismes de domination qui nous
          traversent doivent aussi être combattus. La révolution sera
          convergente et intersectionnelle.
        </p>
        <p>
          Notre société est excluante : raciste, hétérocentrée, validiste,
          psychophobe, transphobe, âgiste, homophobe, grossophobe…Faisons
          l’effort de compréhension et n’ignorons pas nos propres dominations et
          ses mécanismes en jeu. N’attendons pas que les personnes concernées
          nous éduquent. Agissons !
        </p>
        <p>
          Prendre soin des autres est loin d’être naïf : l’empathie, la joie et
          la fin des rapports de domination est un véritable programme
          politique.
        </p>
        <p>Cher·es adelphes, prenez soin de vous, prenez soin des autres.</p>
        <p>Battons-nous toustes ensemble, </p>
        <p>Dansons toustes ensemble. </p>
        <p>Bisous. </p>
        <p>
          Pour aller plus loin :
          <ul>
            <li>
              <a
                href="https://boutique.binge.audio/products/politiser-le-bien-etre-camille-teste"
                rel="noopener noreferrer"
              >
                Politiser le bien-être - Camille Teste
              </a>
            </li>
            <li>
              <a
                href="https://boutique.binge.audio/products/mecanique-du-privilege-blanc-estelle-depris"
                rel="noopener noreferrer"
              >
                Mécanique du privilège blanc - Estelle Depris
              </a>
            </li>
            <li>
              <a
                href="https://www.seuil.com/ouvrage/ascendant-beauf-rose-lamy/9782021596069"
                rel="noopener noreferrer"
              >
                Ascendant beauf - Rose Lamy
              </a>
            </li>
            <li>
              <a
                href="https://www.arteradio.com/son/nous_sommes_intersexes"
                rel="noopener noreferrer"
              >
                Nous sommes intersexes - Charlotte Bienaimé - Arte Radio
              </a>
            </li>
            <li>
              <a
                href="https://www.binge.audio/podcast/kiffetarace/"
                rel="noopener noreferrer"
              >
                Kiffe ta race - Rokhaya Diallo et Grace Ly
              </a>
            </li>
            <li>
              <a
                href="https://boutique.binge.audio/products/proteger-nos-enfants-gabrielle-richard"
                rel="noopener noreferrer"
              >
                Protéger nos enfants - Gabrielle Richard
              </a>
            </li>
            <li>
              <a
                href="https://revueladeferlante.fr/la-fin-des-monstres/"
                rel="noopener noreferrer"
              >
                La fin des monstres, Tal Madesta
              </a>
            </li>
            <li>
              … et toutes ressources que vous pourrez trouver sur les rapports
              de domination. De nombreux.ses auteur.ices, podcasteur.ices,
              sociologues et surtout personnes concernées documentent les
              discriminations quotidiennes
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on supprimait les frais de
        successions ?
      </p>
    ),
    answer: (
      <>
        <p>
          Les droits de succession fonctionnent par tranche comme l’impôt sur le
          revenu. Les héritiers directs (les enfants) ne paient pas d’impôts sur
          les premiers 100 000€ hérités. Il faut donc hériter de plus de 100
          000€ avant de payer des droits de successions. Les droits de
          succession sont déjà un impôt dirigé vers une minorité héritant de
          grandes sommes.
        </p>
        <p>
          T. Piketty a montré que les plus grandes fortunes accumulent une part
          toujours plus importante des richesses mondiales et la conservent par
          l&apos;héritage. Dit autrement, le gâteau des richesses mondiales est
          de plus en plus capté par ces grandes fortunes quand le reste de la
          planète se partage une part toujours plus faible.
        </p>
        <p>
          Le problème, n&apos;est pas le montant des droits de succession, mais
          l&apos;héritage en lui même. Il permet l’accumulation de richesse et
          empêche toute possibilité de partage de ces richesses (dans les
          services publics par exemple...) !
        </p>
        <p>
          Pour une société plus égalitaire, l’héritage est un fardeau à
          supprimer.
        </p>
        <p>Alors, prêt·es à supprimer l&apos;héritage sans limite ?</p>
        <p>
          Pour aller plus loin :
          <ul>
            <li>
              <a
                href="https://www.seuil.com/ouvrage/le-capital-au-xxie-siecle-thomas-piketty/9782021082289"
                rel="noopener noreferrer"
              >
                Le Capital au XXIe siècle - Thomas Piketty
              </a>
            </li>
            <li>
              <a
                href="https://www.lemonde.fr/economie/video/2020/02/05/faut-il-supprimer-l-heritage-et-les-frais-de-succession_6028527_3234.html"
                rel="noopener noreferrer"
              >
                Faut-il supprimer l’héritage ? - Par Asia Balluffier - Le Monde
              </a>
            </li>
          </ul>
        </p>
        <div style={{ aspectRatio: "16/9", width: "100%" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/a1538GVBxJ"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on supprimait les aides
        sociales ?
      </p>
    ),
    answer: (
      <>
        <p>38 % des ayant droits ne perçoivent pas l’aide au logement.</p>
        <p>34 % des ayant droits ne perçoivent pas le RSA.</p>
        <p>
          61 % des ayants droits avec une incapacité supérieure à 50 % ne
          perçoivent par l’Allocation Adulte Handicapé (AAH).
        </p>
        <p>
          85 % des ayants droits avec une incapacité supérieure à 50 % ne
          perçoivent pas allocation éducation enfants handicapés.
        </p>
        <p>
          À quoi bon mettre en place des aides sociales quand elles sont souvent
          non réclamées par les ayant droits et stigmatisées par le personnel
          politique ?
        </p>
        <p>
          D’autres solutions existent, par exemple, certain.es prônent le revenu
          universel, qui consiste à verser la même somme à chacun et chacune
          sans condition de ressources
        </p>
        <p>
          Encore plus ambitieux – et plus juste -, d’autres proposent d’étendre
          ce dispositif à un véritable salaire à vie, qui dépendrait de
          qualification ou des besoins de chacun.
        </p>
        <p>
          À quand la désaliénation du travail et le salaire à vie pour une
          véritable justice sociale ?
        </p>

        <div style={{ aspectRatio: "16/9", width: "100%" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/uhg0SUYOXjw?si=8JMvX9w_TzLLpucg"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> une utopie avait déjà existé
        ?
      </p>
    ),
    answer: (
      <>
        <p>
          La civilisation andine de Caral avait une organisation marquée par une
          horizontalité sociale. Les récoltes étaient réparties en fonction des
          besoins. Les genres étaient traités sur un pied d&apos;égalité. Plutôt
          bien réelle pour une utopie ?
        </p>
        <p>
          Au 21ème, on ne cesse de nous rappeler que nous sommes des doux et
          douces rêveurs et rêveuses de vouloir plus de droits, plus de justices
          sociales et plus d’égalités. Pourtant, ces rêves ne sont brimés que
          par la peur des privilégiés de perdre leurs privilèges.
        </p>
        <p>
          L’évolution de l’humanité n’est pas vouée à la violence, à la
          croissance économique, à la soumission. Soyons utopistes et allions
          nos forces pour atteindre cette utopie et sortir de l’invasion des
          idées fascistes.
        </p>
        <p>Alors qu’est-ce qu’on attend pour passer du rêve à la réalité ?</p>
        <p>
          Pour aller plus loin :
          <ul>
            <li>
              <a
                href="https://www.arteradio.com/emission/et-parfois-on-gagne"
                rel="noopener noreferrer"
              >
                Et parfois, on gagne - Un documentaire de Victoire Tuaillon,
                Claire Richard & Bertrand Guillot
              </a>
            </li>
            <li>
              <a
                href="https://fr.wikipedia.org/wiki/Andor_(s%C3%A9rie_t%C3%A9l%C3%A9vis%C3%A9e)"
                rel="noopener noreferrer"
              >
                Petit manuel de révolution : La Série Andor - Star Wars - Disney
                (oui oui)
              </a>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on votait sans candidat ?
      </p>
    ),
    answer: (
      <>
        <p>
          Il faut une sacrée dose d’ego pour se présenter à une élection, pour
          soumettre son destin au jugement de plusieurs milliers ou millions de
          personnes, pour prendre des décisions au nom d’une commune, d’un
          département, d’une région, d’un pays entier.{" "}
        </p>
        <p>
          La démocratie représentative est contraire à la République. Res
          publica : la chose publique est aujourd’hui confisquée par des
          professionnel·le·s de la politique. Iels ne nous connaissent pas,
          méprisent nos avis, sont très éloigné.es de nos difficultés du
          quotidien.
        </p>
        <p>
          Voter sans candidat.e implique de pas laisser des élu·e·s de décider
          et de faire à notre place. Donnons-nous le droit de déterminer
          collectivement notre avenir !
        </p>
        <p>
          Les instances de décisions doivent être ouvertes et accessibles à
          toustes, quelle que soit ta position sociale et tes études. C’est aux
          citoyen.nes de reprendre le pouvoir pour ne pas le subir. D’ailleurs,
          de nombreuses listes municipalistes se créent partout en France.{" "}
        </p>
        <p>
          Alors, prêt·e·s à prendre la société en main et à t’investir en
          politique ?
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> l&apos;extrême droite
        n&apos;était pas une fatalité ?
      </p>
    ),
    answer: (
      <>
        <p>
          L’extrême droite n&apos;est pas une solution : elle soutient les
          riches, attaque les services publics, détruit la démocratie, menace
          nos familles, nos ami·es, nos collègues et nos voisin·es.
        </p>
        <p>
          Et elle n&apos;est pas une fatalité : partout la riposte
          s&apos;organise et un autre chemin s&apos;ouvre. L’Espagne et
          l’Irlande ont repris le chemin vers la gauche, New York l’a fait aussi
          dans une pays présidé par un facho.{" "}
        </p>
        <p>
          Pleins de moyens sont possibles pour ne pas attendre que l’extrême
          droite s’installe en France:
        </p>
        <p>
          Tu peux rejoindre le Quartier Généreux et notre collectif la Riposte
          Généreuse…
        </p>
        <p>
          Tu peux soutenir des médias indépendants, comme le projet{" "}
          <a href="https://soutenir.streetpress.com/" rel="noopener noreferrer">
            StreetPress
          </a>
          .
        </p>
        <p>
          Tu peux soutenir financièrement des collectifs qui se battent pour un
          monde plus juste.{" "}
        </p>
        <p>Alors, prêt·es à nous rejoindre dans la lutte ?</p>

        <p>
          Pour aller plus loin : 
          <ul>
            <li>
              <a
                href="https://www.casterman.com/Bande-dessinee/Catalogue/la-bataille-culturelle/9782203296558"
                rel="noopener noreferrer"
              >
                La Bataille culturelle - Blanche Sabbah
              </a>
            </li>
            <li>
              <a
                href="https://www.editionslesliensquiliberent.fr/livre-Parasites-720-1-1-0-1.html"
                rel="noopener noreferrer"
              >
                Parasites - Nicolas Framont
              </a>
            </li>
            <li>
              <a
                href="https://www.payot-rivages.fr/payot/livre/r%C3%A9sister-9782228937597"
                rel="noopener noreferrer"
              >
                Résister - Salomé Saqué
              </a>
            </li>
            <li>
              <a href="" rel="noopener noreferrer">
                Tous les médias indépendants que tu peux soutenir 😉
              </a>
            </li>
          </ul>
        </p>

        <div style={{ aspectRatio: "16/9", width: "100%" }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/nAd3XhjARh4?si=7j-pXfaN1tu_v0Tf"
            title="YouTube video player"
            style={{ border: 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </>
    ),
  },
];

export default function CalendrierDeLavenir() {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const flipCardRef = useRef<HTMLDivElement>(null);
  const flipCardFront = useRef<HTMLDivElement>(null);
  const answerContentRef = useRef<HTMLDivElement>(null);
  const [visibleAnswer, setVisibleAnswer] = useState<number | null>(null);
  const [counter, setCounter] = useState<number>(0);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const incCounter = () => setCounter((c) => c + 1);

  useEffect(() => {
    setTimeout(() => {
      setCurrentDate(new Date());
    }, 10_000);
    console.log(currentDate);
  }, [currentDate]);

  useEffect(() => {
    const onResize = () => {
      if (!mainContainerRef.current || !answerContentRef.current) return;
      if (!answerContentRef.current) return;
      answerContentRef.current.style.width = `${mainContainerRef.current.clientWidth}px`;
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (visibleAnswer === null && answerRef.current) {
      answerRef.current.style.transition = "none";
      answerRef.current.style.opacity = "0.0";
      answerRef.current.style.zIndex = "-1";
      answerRef.current.style.width = "0px";
      answerRef.current.style.height = "0px";
      if (flipCardRef.current) {
        flipCardRef.current.style.transform = "rotateX(0deg)";
      }
    }
  }, [visibleAnswer]);

  const selectAnswer = (index: number, target: HTMLDivElement) => {
    setVisibleAnswer(index);
    if (answerRef.current) {
      const position = target.getBoundingClientRect();
      answerRef.current.style.transition = "none";
      answerRef.current.style.opacity = "0.0";
      window.requestAnimationFrame(() => {
        if (answerRef.current) {
          answerRef.current.style.zIndex = `250`;
          answerRef.current.style.top = `${position.y}px`;
          answerRef.current.style.left = `${position.x}px`;
          answerRef.current.style.height = `${target.clientHeight}px`;
          answerRef.current.style.width = `${target.clientWidth}px`;
          if (flipCardFront.current) {
            flipCardFront.current.style.backgroundColor = `${window
              .getComputedStyle(target, null)
              .getPropertyValue("background-color")}`;
          }
          answerRef.current.style.opacity = "1.0";
          window.requestAnimationFrame(() => {
            if (!answerRef.current) return;
            answerRef.current.style.transition = `all 0.5s ease-in-out`;
            if (answerContentRef.current) {
              answerContentRef.current.style.transition = `none`;
            }
            window.requestAnimationFrame(() => {
              if (!answerRef.current || !mainContainerRef.current) return;
              if (flipCardRef.current) {
                flipCardRef.current.style.transform = "rotateX(180deg)";
              }
              if (answerContentRef.current) {
                const ratio =
                  answerRef.current.clientWidth /
                  mainContainerRef.current.clientWidth;
                answerContentRef.current.style.transform = `scale(${ratio})`;
                answerContentRef.current.style.transformOrigin = "0 0";
              }

              window.setTimeout(() => {
                if (
                  !answerRef.current ||
                  !mainContainerRef.current ||
                  !answerContentRef.current
                )
                  return;

                const containerPos =
                  mainContainerRef.current.getBoundingClientRect();

                const contentHeight = answerContentRef.current.clientHeight;
                answerRef.current.style.top = `${
                  window.innerHeight / 2 - contentHeight / 2
                }px`;
                answerRef.current.style.left = `${containerPos.x}px`;
                answerRef.current.style.height = `${contentHeight}px`;
                answerRef.current.style.width = `${mainContainerRef.current.clientWidth}px`;
                if (answerContentRef.current) {
                  answerContentRef.current.style.transition = `transform 0.5s ease-in-out`;
                  answerContentRef.current.style.transform = "scale(1)";
                  answerContentRef.current.style.transformOrigin = "0 0";
                }
              }, 400);
            });
          });
        }
      });
    }
  };

  const renderQuestion = ({ question }: CalendrierAvenir, index: number) => {
    const questionDate = new Date(2025, 11, index + 1);
    const questionVisible = currentDate >= questionDate || counter >= 10;
    return (
      <div
        key={index}
        onClick={(event) => selectAnswer(index, event.currentTarget)}
        className={`${style.question} ${
          visibleAnswer === index ? style.visibleAnswer : ""
        } ${questionVisible ? "" : style.blur}`}
      >
        <div className={style.questionNumber}>#{index + 1}</div>
        <div className={style.questionContent}>{question}</div>
      </div>
    );
  };
  return (
    <>
      <h1 onClick={incCounter}>Calendrier de l&apos;Avenir</h1>
      <div
        className={`${style.clickAway} ${
          visibleAnswer !== null ? "" : style.hidden
        }`}
        onClick={() => setVisibleAnswer(null)}
      />
      <div className={style.calendrier} ref={mainContainerRef}>
        <div className={style.currentAnswer} ref={answerRef}>
          <div className={style.flipCardInner} ref={flipCardRef}>
            <div className={style.flipCardFront} ref={flipCardFront}>
              {visibleAnswer !== null && (
                <>
                  <div className={style.questionNumber}>
                    #{visibleAnswer + 1}
                  </div>
                  <div className={style.questionContent}>
                    {content[visibleAnswer].question}
                  </div>
                </>
              )}
            </div>
            <div className={style.flipCardBack}>
              <div className={style.answerContent} ref={answerContentRef}>
                {visibleAnswer !== null && (
                  <>
                    <div className={style.questionNumber}>
                      #{visibleAnswer + 1}
                    </div>
                    <p className={style.questionInAnswer}>
                      {content[visibleAnswer].question}
                    </p>
                    {content[visibleAnswer].answer}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        {content.map(renderQuestion)}
      </div>
    </>
  );
}
