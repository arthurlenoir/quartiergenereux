import { GetStaticProps } from "next";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Root } from "../../components/Root";
import { Menu } from "../../types/menu";
import { fetchMenu } from "../../utils/fetchMenu";
import React, { ReactNode, useEffect, useRef, useState } from "react";

import style from "./calendrier.module.css";

export interface PageProps {
  menu: Menu | null;
}

interface CalendrierAvenir {
  question: ReactNode;
  answer: ReactNode;
}

const content: CalendrierAvenir[] = [
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on attribuait les logements au tirage au sort ?
      </p>
    ),
    answer: (
      <>
        <p>
          Difficile de trouver un logement proche de son lieu de travail, adapté à sa situation familiale et accessible à son budget ? C’est normal, avec  50 % des logements en location détenus par seulement 3 % des propriétaires, la pierre est un investissement rentable privant chacun et chacune à l’accès à un logement abordable.
        </p>
        <p>
          La crise du logement est due à une pénurie artificialisée par la spéculation.
        </p>
        <p>Dans plein d’autres domaines, les pénuries sont gérées par le tirage au sort (comme pour les places aux épreuves des jeux olympiques), alors pourquoi pas les logements ? En plus il y a seulement 3,1 millions de logements vacants, on dit ça on dit rien, enfin bref !</p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on était rémunéré selon l’utilité de son métier ?
      </p>
    ),
    answer: (
      <>
        <p>
          En 2020, la crise du Covid a souligné la vulnérabilité de notre société et a permis de rappeler l’importance, voir la nécessité, de celles et ceux appelés « la première ligne ». Eboueur·euse, couducteur·ice de transports en commun, caissier·ère, boulanger·ère, aide soignant·e, enseignant·e, ouvrier·ère agricole… autant de métier indispensable au fonctionnement de la société. Or, ce sont les métiers les plus précaires.  Alors, pourquoi nos salaires ne sont pas proportionnels à leur utilité sociale ? D’ailleurs, comment définiriez-vous l’utilité des métiers ?

        </p>
        <p>
          Et vous ? Trouvez-vous du sens dans votre métier ? Arrivez-vous à expliquer ce que votre travail apporte à l’intérêt général ? En fonction des réponses aux deux questions précédentes, quel salaire vous attribueriez-vous ?
        </p>

        <p>
          Conseil lecture :{" "}
          <a
            href="https://www.editionslesliensquiliberent.fr/livre-Bullshit_Jobs-578-1-1-0-1.html"
            rel="noopener noreferrer"
          >
            Bullshit Jobs - David GRAEBER
          </a>
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
          Sacrée question tant nous sommes habitué.e.s à nos présidents de la République, de régions, de départements, d’exécutifs locaux, nos présidents directeurs généraux d’entreprises, nos patrons, nos rois. Et n’y voyez pas un hasard s’ils sont déclinés au masculin !

        </p>
        <p>
          Souvent nous plions le débat par un laconique « c’est utopique » ou c’est un futur très lointain. Et pourtant, le sujet n’est pas de savoir si c’est possible, car c’est possible, puisque ça existe. Des études archéologiques et ethnologiques nous apprennent aujourd’hui que les sociétés sans chef existent, ont existé. Et que l’humanité a vécu bien plus longtemps sans État qu’avec ! Une question en tout cas utile à méditer en ce 2 décembre jour anniversaire du coup d’État de Napoléon III qui mit fin à la Deuxième République.
        </p>
        <p>
          Conseils lecture :
          <ul>
            <li><a
              href="https://www.editionslesliensquiliberent.fr/livre-Au_commencement_%C3%A9tait-672-1-1-0-1.html"
              rel="noopener noreferrer"
            >
              Au commencement était… Une nouvelle histoire de l&apos;humanité - David GRAEBER &amp; David WENGROW
            </a></li>
            <li><a
              href="https://www.editionspoints.com/ouvrage/zomia-ou-l-art-de-ne-pas-etre-gouverne-james-c-scott/9782757878231"
              rel="noopener noreferrer"
            >
              Zomia ou l&apos;art de ne pas être gouverné - James C. Scott
            </a></li>
            <li><a
              href="https://www.leseditionsdeminuit.fr/livre-La_Soci%C3%A9t%C3%A9_contre_l%E2%80%99%C3%89tat-1999-1-1-0-1.html"
              rel="noopener noreferrer"
            >
              La Société contre l’État - Pierre Clastres
            </a></li>
          </ul>


        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> un·e français·e, c’était tout simplement toutes personnes vivant en France
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
        <span className={style.whatIf}>Et si</span> au lieu de punir on
        réparait ?
      </p>
    ),
    answer: (
      <>
        <p>
          Le système carcéral est aujourd’hui à bout de souffle : pas assez de places, malgré des constructions de prisons continues (25 000 places de prisons depuis les années 90), cellules insalubres, non accompagnement à la réintégration sociale et professionnelle, récidives, une justice classiste et raciste...
        </p>
        <p>
          En 1981, qui aurait pu prédire l’abolition de la peine de mort ? Aujourd’hui, on ne reviendrait pas sur cette loi fondamentale. Peut-être est-il le temps aujourd’hui de construire une société sans prison ? En 2020, le taux de récidive 1 an après la sortie était de 48,3 %.
        </p>
        <p>
          Il existe d’autres façons de prendre en charge et de réhabiliter les condamnés, notamment par les justices communautaires.
        </p>
        <p>
          Voici un exemple  de justice réparatrice (pour la blague ! Mais pourquoi pas ?) : Sarkozy pourrait peut-être faire un stage de citoyenneté, et verser, en réparation, l’argent volé à l’État, dans les caisses de la sécurité sociale.
        </p>
        <p>
          Conseils lecture :
          <ul>
            <li><a
              href="https://lafabrique.fr/faire-justice/"
              rel="noopener noreferrer"
            >
              Faire justice - Elsa Deck Marsault
            </a></li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on arrêtait d&apos;élever et
        de massacrer des milliards d&apos;animaux ?
      </p>
    ),
    answer: (
      <>
        <p>
          L’agro-industrie mondialisée, la chasse, la pêche, les traditions
          désuètes (et cruelles), tout ceci a pour conséquence près de 10 % des
          émissions de gaz à effets de serre, l’effondrement de la biodiversité,
          la déforestation, la destruction des fonds marins, la pollution des
          sols et cours d’eau.
        </p>
        <p>
          Rappel : la maltraitance animale peut être punie de 3 ans
          d’emprisonnement et de 45000€ d’amende, 75000 en cas de décès de
          l’animal. Sauf si c’est une corrida car c’est une tradition locale
          ininterrompue.
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> tout le monde avait un
        toit ?
      </p>
    ),
    answer: (
      <>
        <p>
          La Norvège a réduit de moitié le sans abrisme depuis 1996 par la
          politique « un logement d&apos;abord ».
        </p>

        <p>
          La politique du logement d&apos;abord considère qu&apos;un logement
          sûr et stable est la base de tout le reste. il devient beaucoup plus
          facile de trouver un emploi ou de guérir des addictions. En Norvège,
          le gouvernement accompagne financièrement cette politique, les
          collectivités et les ONG la mettent en œuvre. En France, depuis 2012,
          le nombre de sans-abris a plus que doublé pour atteindre 350 000
          personnes et 753 sans-abris sont décédés en 2024.
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on vivait toutes et tous
        dignement ?
      </p>
    ),
    answer: (
      <>
        <p>
          La civilisation andine de Caral a prospéré sans recours à la guerre ni
          à l’oppression. Son organisation était marquée par une horizontalité
          sociale. les récoltes étaient réparties en fonction des besoins. les
          deux sexes étaient traités sur un pied d&apos;égalité. plutôt bien
          réel pour une utopie ?
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> l’échec scolaire devenait une réussite ?
      </p>
    ),
    answer: (
      <>
        <p>L’École républicaine a pour beau projet la réussite de toutes et tous, en valorisant l’égalité des chances, quelle que soit l’origine sociale. Or, notre école est aujourd’hui une machine au mérite et malheureusement l’ascenseur social est cassé. L’égalité des chances ne permet pas de dépasser les inégalités sociales de départ et l’école reproduit ces inégalités : 55 % des jeunes dont les parents sont cadres ou de professions intermédiaires ont un diplôme bac+2 ou plus, contre seulement 24 % des jeunes dont les parents sont ouvriers et employés. </p>
        <p>Ainsi, « Quand on veut on peut » relève davantage d’une auto-justification des classes dominantes que de la possibilité offerte par l’école de permettre d’ouvrir le champ des possibles à toustes. La réussite scolaire, puis professionnelle n’est pas le résultat de compétences acquises, mais bien le résultat de critères déterminés par une classe dominante. </p>
        <p>Et si on imaginait une société sans mérite, où chacun peut être reconnu en dehors de ces critères établis ? Et si on valorisait différemment nos parcours, nos valeurs, nos engagements ?</p>
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
          l&apos;extrême droite n&apos;est pas une solution : elle soutient les
          riches, attaque les services publics, détruit la démocratie, menace
          nos familles, nos ami.e.s, nos collègues et nos voisin.e.s. et elle
          n&apos;est pas une fatalité: partout la riposte s&apos;organise et un
          autre chemin s&apos;ouvre. tu peux par exemple soutenir le projet
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> nous étions tous·tes actionnaires ?
      </p>
    ),
    answer: (
      <>
        <p>Une entreprise rentable mais pas assez, fermée sous pression des actionnaires pour augmenter la rentabilité de son capital… ça vous dit quelque chose ? Cette histoire se répète malheureusement trop souvent : Bledina à Villefranche, Goodyear à Amiens, Michelin à Cholet, Sonco à Laon, Danone à Calais… </p>
        <p>Pourtant d’autres modèles dans lesquels le pouvoir décisionnel change de main sont possibles. En permettant aux salariés de détenir leur outil de travail et en instaurant une vraie démocratie – une personne une voix – au sein des assemblées générales d’entreprise, les SCOP sont un exemple d’entreprises préservées d’investisseurs prédateurs.</p>
        <p>En associant bénéficiaires, salariés, pouvoirs publics, fournisseurs, les SCIC sont un autre exemple d’entreprises vertueuses pour le bien commun. </p>
        <p>Un autre monde est possible dans lequel activité économique ne rime pas forcément avec enrichissement du capital. </p>
        <p>Alors prêt·es à détenir les moyens de production ?</p>
        <p>Resources :
          <ul>
            <li><a
              href="https://www.radiofrance.fr/franceculture/podcasts/entendez-vous-l-eco/scop-les-salaries-au-pouvoir-4688813"
              rel="noopener noreferrer"
            >
              &quot;SCOP&quot; : les salariés au pouvoir ! - Podcast France Culture
            </a></li>
            <li><a
              href="https://www.les-scop.coop/"
              rel="noopener noreferrer"
            >
              www.les-scop.coop
            </a></li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on prenait soin de nos enfants ?
      </p>
    ),
    answer: (
      <>
        <p>Les chiffres sont effrayants :
          <ul>
            <li>3 enfants par classe sont victimes de violence, </li>
            <li>1 enfant sur 2 est frappé avant l’âge de deux ans, </li>
            <li>85 % des enfants ont subi des violences éducatives ordinaires (physique, verbale ou psychique). </li>
          </ul></p>
        <p>Les enfants sont des êtres vulnérables qui subissent de la violence au quotidien : non écoutés, mis à l’écart, humiliés… Ils obéissent aux règles établies par les adultes dans une société pour les adultes. Le rapport aux adultes est un rapport de domination.</p>
        <p>Et si, on imaginait une société à hauteur d’enfants, où les enfants étaient vraiment écoutés et respectés pour ce qu’ils et elles sont et non pas selon ce que les adultes imaginent ? </p>
        <p>Et si nous arrêtions de vouloir des espaces, des restaurants, des trains sans enfants ? Et si nous arrêtions de blâmer les parents - les mères - et participions collectivement à faire grandir les enfants sans jugements ? Et si nous proposions plus de places en crèche, plus de solutions de garde pour prendre en charge nos enfants ? Et si on divisait les classes par deux pour accompagner et faire réussir nos enfants dans les meilleures conditions possibles ?</p>
        <p>Resources :
          <ul>
            <li><a
              href="https://www.instagram.com/marion_cuerq/"
              rel="noopener noreferrer"
            >
              Marie Cuerq
            </a></li>
            <li><a
              href="https://www.radio.fr/podcast/qui-cest-qui-commande"
              rel="noopener noreferrer"
            >
              Podcast « Qui c&apos;est qui commande ? » - Lolita Rivé
            </a></li>
          </ul>
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on supprimait les aides sociales ?
      </p>
    ),
    answer: (
      <>
        <p>34 % des ayant droits ne perçoivent pas le RSA.</p>
        <p>38 % des ayant droits ne perçoivent pas l’aide au logement.</p>
        <p>61 % des ayants droits avec une incapacité supérieure à 50 % ne perçoivent par l’Allocation Adulte Handicapé (AAH). </p>
        <p>85 % des ayants droits avec une incapacité supérieure à 50 % ne perçoivent pas allocation éducation enfants handicapés. </p>

        <p>À quoi bon mettre en place des aides sociales quand elles sont souvent non réclamées par les ayant droits et stigmatisées par le personnel politique ? </p>
        <p>D’autres solutions existent, par exemple, certain·es prônent le revenu universel, qui consiste à verser la même somme à chacun et chacune sans condition de ressources</p>
        <p>Encore plus ambitieux – et plus juste -, d’autres proposent d’étendre ce dispositif à un véritable salaire à vie, qui dépendrait de qualification ou des besoins de chacun. </p>

        <div style={{ aspectRatio: "16/9", width: "100%" }}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/uhg0SUYOXjw?si=8JMvX9w_TzLLpucg" title="YouTube video player" style={{ border: 0 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>

      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> on permettait aux agriculteur·ices de vivre dignement ?
      </p>
    ),
    answer: (
      <>
        <p>Aujourd’hui, 18 % des agriculteurs et agricultrices vivent sous le seuil de pauvreté. Leurs conditions de travail sont toujours plus difficiles : 7 jours sur 7, pas ou peu de vacances pour des revenus tirés vers le bas par l’industrie agro-alimentaire. Or, paysans et paysannes sont indispensables à nos sociétés, ils produisent notre nourriture tout en modelant les paysages et la biodiversité aux abords de leurs exploitations.</p>
        <p>Et si le secteur public s’investissait également dans le secteur agricole ? Des communes pourraient reprendre et dynamiser des fermes à l’arrêt faute de repreneurs… D’autres pourrait décider d’en créer de nouvelles pour répondre à des enjeux locaux : limiter l’artificialisation des sols et créer des bulles de fraîcheurs en zones urbaines, diversifier les productions locales pour contribuer à une alimentation en circuit court dans les grandes zones de monoculture, etc.</p>
        <p>Il existe des modèles où l’agriculture ne se résume pas à l’exploitation des agriculteurs par l’industrie agroalimentaire, où les collectivités locales se muent en productrices de l’alimentation de leur territoire et où les paysans et paysannes peuvent mieux vivre de leur métier.</p>
        <p>Des projets existent déjà, en 2024, le portail France PAT (Projets Alimentaires Territoriaux) recensait 48 fermes existantes ou en projet.</p>
        <p>Alors, prêt⋅es à changer d’échelles et à doter chaque collectivité de services agricoles ?</p>

        <p>Resources :
          <ul>
            <li><a
              href="https://france-pat.fr/outil/repertoire-national-des-fermes-maraicheres-municipales-intercommunales-et-departementales/"
              rel="noopener noreferrer"
            >
              Répertoire national des fermes maraîchères municipales, intercommunales et départementales
            </a></li>
            <li><a
              href="https://www.marabout.com/livre/il-est-ou-le-patron-9782501146845/"
              rel="noopener noreferrer"
            >
              Il est où le patron ? - Maud Bénézit & Les paysannes en polaire
            </a></li>
            <li><a
              href="https://www.arteradio.com/son/paysannes-en-lutte-1-2"
              rel="noopener noreferrer"
            >
              Paysannes en lutte - Charlotte Bienaimé - Podcast Arte Radio
            </a></li>
          </ul></p>

      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> ton voisin n’était pas le problème
      </p>
    ),
    answer: (
      <>
        <p>Vidéo surveillance, propriété privée affiché en grand, quartiers privés et fermés, dispositif voisins vigilants… Les années passent et les initiatives pour se protéger de l’autre foisonnent. Que cet autre soit ton voisin, les jeunes du quartier d’à côté, une communauté du voyage de passage, le principe est toujours le même : considérer l’autre comme l’origine de nos petites et grandes galères du quotidien.</p>
        <p>Si toi, comme l’autre, que tu accuses parfois de responsable, vivez ces mêmes galères, c’est parce que l’augmentation continue des inégalités met en péril la possibilité pour tous et toutes de vivre dignement. En 2024, le patrimoine des 500 plus grandes fortunes française a dépassé les 1200 milliards d’euros tandis que le taux de pauvreté est en augmentation continue depuis les années 2000. C’est ce que montre le chercheur Richard Wilkinson, épidémiologiste social, dans ces travaux sur les inégalités. Les pays les moins inégalitaires sont aussi les pays dans lesquels la population est en meilleure santé, où les habitants sont les plus heureux, où les taux de criminalité sont les plus faibles…</p>
        <p>Alors, plutôt que de continuer de se protéger, de s’enfermer ou d’accuser son voisin, prônons plutôt une société moins inégalitaire dans laquelle les rapports sociaux seraient enfin plus apaisés ? </p>


        <p>Resources :
          <ul>
            <li><a
              href="https://emmaclit.com/2025/11/14/les-assistes/"
              rel="noopener noreferrer"
            >
              Les assistés - Emma
            </a></li>
            <li><a
              href="https://fakirpresse.info/produit/legalite-cest-la-sante-et-lamour-aussi/"
              rel="noopener noreferrer"
            >
              L’égalité c’est la santé ! - François Ruffin
            </a></li>
          </ul></p>

      </>
    ),
  },
];

export default function CalendrierDeLavenir({ menu }: PageProps) {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const flipCardRef = useRef<HTMLDivElement>(null);
  const flipCardFront = useRef<HTMLDivElement>(null);
  const answerContentRef = useRef<HTMLDivElement>(null);
  const [visibleAnswer, setVisibleAnswer] = useState<number | null>(null);
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  useEffect(() => {
    setTimeout(() => {
      setCurrentDate(new Date());
    }, 10_000);
  }, [currentDate])

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
        flipCardRef.current.style.transform = 'rotateX(0deg)'
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
          console.log(target)
          console.log("target.clientWidth", target.clientWidth)
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
                flipCardRef.current.style.transform = 'rotateX(180deg)'
              }
              if (answerContentRef.current) {
                const ratio = answerRef.current.clientWidth / mainContainerRef.current.clientWidth;
                answerContentRef.current.style.transform = `scale(${ratio})`
                answerContentRef.current.style.transformOrigin = '0 0'
              }

              window.setTimeout(() => {
                if (!answerRef.current || !mainContainerRef.current || !answerContentRef.current) return;

                const containerPos =
                  mainContainerRef.current.getBoundingClientRect();

                const contentHeight = answerContentRef.current.clientHeight;
                answerRef.current.style.top = `${window.innerHeight / 2 - contentHeight / 2
                  }px`;
                answerRef.current.style.left = `${containerPos.x}px`;
                answerRef.current.style.height = `${contentHeight}px`;
                answerRef.current.style.width = `${mainContainerRef.current.clientWidth}px`;
                if (answerContentRef.current) {
                  answerContentRef.current.style.transition = `transform 0.5s ease-in-out`;
                  answerContentRef.current.style.transform = 'scale(1)'
                  answerContentRef.current.style.transformOrigin = '0 0'
                }
              }, 400);

            });
          });
        }
      });
    }
  };

  const renderQuestion = (
    { question }: CalendrierAvenir,
    index: number
  ) => (
    <div
      key={index}
      onClick={(event) => selectAnswer(index, event.currentTarget)}
      className={`${style.question} ${visibleAnswer === index ? style.visibleAnswer : ""
        } ${index === content.length - 1 ? style.blur : ""}`}
    >
      <div className={style.questionNumber}>#{index + 1}</div>
      <div className={style.questionContent}>{question}</div>
    </div>
  );
  return (
    <>
      <Head>
        <title>Le Quartier Généreux · Calendrier de l&apos;avenir</title>
        <meta
          name="description"
          content="Le calendrier de l'avenir du Quartier Généreux."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Root menu={menu} style={{ fontSize: "18px" }}>
        <h1>Calendrier de l&apos;Avenir</h1>
        <div
          className={`${style.clickAway} ${visibleAnswer !== null ? "" : style.hidden
            }`}
          onClick={() => setVisibleAnswer(null)}
        />
        <div className={style.calendrier} ref={mainContainerRef}>
          <div className={style.currentAnswer} ref={answerRef}>
            <div className={style.flipCardInner} ref={flipCardRef}>
              <div className={style.flipCardFront} ref={flipCardFront}>
                {visibleAnswer !== null && (
                  <><div className={style.questionNumber}>#{visibleAnswer + 1}</div>
                    <div className={style.questionContent}>{content[visibleAnswer].question}</div></>

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
                  )}</div>
              </div></div>
          </div>
          {content.map(renderQuestion)}
        </div>
      </Root>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const props = await fetchMenu();
  return { props };
};
