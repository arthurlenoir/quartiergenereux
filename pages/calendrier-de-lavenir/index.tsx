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
        <span className={style.whatIf}>Et si</span> on attribuait les logements
        au tirage au sort ?
      </p>
    ),
    answer: (
      <>
        <p>
          50 % des logements en location sont détenus par 3 % des propriétaires…
          La crise du logement est due à une pénurie artificialisée par la
          spéculation.{" "}
        </p>
        <p>
          Dans plein d’autres domaines, les pénuries sont gérées par le tirage
          au sort (comme lors des jeux olympiques), pourquoi pas les logements ?
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
          Les personnes dont nous avons le plus besoin sont les personnes les
          plus précaires… Pourquoi ?! Il faudrait que nos salaires soient
          proportionnels à leur utilité sociale. Comment vous définiriez
          l’utilité des métiers ?
        </p>
        <p>
          Préférez-vous une société sans soignant·es ou sans avocat·es
          fiscalistes ?
        </p>
        <p>
          Préférez vous une société sans éboueur·euses ou sans chef·fe de
          projet ?
        </p>
        <p>
          Préférez-vous une société sans agriculteurs·trices ou sans
          consultant·e ?
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
          Sacrée question tant nous sommes habitué·es à nos présidents de la
          République, de régions, de départements, d’exécutifs locaux, nos
          présidents directeurs généraux d’entreprises, nos patrons, nos rois.
          Et n’y voyez pas un hasard s’ils sont déclinés au masculin !
        </p>
        <p>
          Souvent nous plions le débat par un laconique « c’est utopique » ou
          c’est un futur très lointain. Et pourtant, le sujet n’est pas de
          savoir si c’est possible, car c’est possible, puisque ça existe. Des
          études archéologiques et éthnologiques nous apprennent aujourd’hui que
          les sociétés sans chef existent, ont existé. Et que l’humanité a vécu
          bien plus longtemps sans État qu’avec !
        </p>
      </>
    ),
  },
  {
    question: (
      <p>
        <span className={style.whatIf}>Et si</span> un·e français·e, c’était
        tout simplement toutes personnes vivant en France ?,
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
          Qui aurait pu imaginer il y a 50 ans l’abolition de la peine de mort ?
          Aujourd’hui, l’abolition de la prison est la suite logique. Il existe
          d’autre façons de réhabiliter les criminels, comme les justices
          communautaires.
        </p>
        <p>
          Au lieu de la prison, Sarkozy pourrait peut-être faire un stage de
          citoyenneté, avec un bracelet à la cheville et être accompagné par
          un·e assistant·e social·e pour faire face à son endettement de
          50 000 000 d’euros qu’il a été obligé de reversé pour boucher le trou
          de la sécu.
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
          la politique du logement d&apos;abord considère qu&apos;un logement
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
];

export default function CalendrierDeLavenir({ menu }: PageProps) {
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const [visibleAnswer, setVisibleAnswer] = useState<number | null>(null);

  useEffect(() => {
    const onResize = () => {
      if (!mainContainerRef.current || !answerRef.current) return;
      const answerContent = answerRef.current
        .firstElementChild as HTMLDivElement | null;
      if (!answerContent) return;
      answerContent.style.width = `${mainContainerRef.current.clientWidth}px`;
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
          answerRef.current.style.backgroundColor = `${window
            .getComputedStyle(target, null)
            .getPropertyValue("background-color")}`;
          answerRef.current.style.opacity = "1.0";
          window.requestAnimationFrame(() => {
            if (!answerRef.current) return;
            answerRef.current.style.transition = `all 0.2s ease-in-out`;
            window.requestAnimationFrame(() => {
              if (!answerRef.current || !mainContainerRef.current) return;
              const containerPos =
                mainContainerRef.current.getBoundingClientRect();
              const contentElement = answerRef.current
                .firstElementChild as HTMLDivElement;
              const contentHeight = contentElement.clientHeight;
              answerRef.current.style.top = `${
                window.innerHeight / 2 - contentHeight / 2
              }px`;
              answerRef.current.style.left = `${containerPos.x}px`;
              answerRef.current.style.height = `${contentHeight}px`;
              answerRef.current.style.width = `${mainContainerRef.current.clientWidth}px`;
            });
          });
        }
      });
    }
  };

  const renderQuestion = (
    { question, answer }: CalendrierAvenir,
    index: number
  ) => (
    <div
      key={index}
      onClick={(event) => selectAnswer(index, event.currentTarget)}
      className={`${style.question} ${
        visibleAnswer === index ? style.visibleAnswer : ""
      }`}
    >
      <div className={style.questionNumber}>#{index + 1}</div>
      <div className={style.questionContent}>{question}</div>
      <div className={style.answer}>{answer}</div>
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
          className={`${style.clickAway} ${
            visibleAnswer !== null ? "" : style.hidden
          }`}
          onClick={() => setVisibleAnswer(null)}
        />
        <div className={style.calendrier} ref={mainContainerRef}>
          <div className={style.currentAnswer} ref={answerRef}>
            <div className={style.answerContent}>
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
