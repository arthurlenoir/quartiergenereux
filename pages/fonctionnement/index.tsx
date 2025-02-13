import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import { Root } from "../../components/Root";
import {
  FonctionnementSubTitle,
  FonctionnementTitle,
  WorkingGroups,
} from "../../components/Fonctionnement";
import { Menu } from "../../types/menu";
import { fetchMenu } from "../../utils/fetchMenu";
import { WorkingGroup } from "../../components/Fonctionnement/WorkingGroups/WorkingGroup.types";
import React from "react";
import { CoPresidency } from "../../components/Fonctionnement/CoPresidency";
import Link from "next/link";

export interface PageProps {
  menu: Menu | null;
}

const coPresidency = [
  {
    name: "Cathy",
    photo: (
      <Image
        src="/benevoles/cathy.webp"
        width={65}
        height={65}
        alt="Cathy"
        style={{ borderRadius: "50%" }}
      />
    ),
  },
  {
    name: "Sarah",
    photo: (
      <Image
        src="/benevoles/sarah.webp"
        width={65}
        height={65}
        alt="Sarah"
        style={{ borderRadius: "50%" }}
      />
    ),
  },
  {
    name: "Jean-Phi",
    photo: (
      <Image
        src="/benevoles/jeanphi.webp"
        width={65}
        height={65}
        alt="Jean-Phi"
        style={{ borderRadius: "50%" }}
      />
    ),
  },
];

const workingGroups: WorkingGroup[] = [
  {
    name: "Aménagement",
    color: "#36478fA6",
    referents: [
      {
        name: "Karen",
        photo: (
          <Image
            src="/benevoles/karen.webp"
            width={65}
            height={65}
            alt="Karen"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
      {
        name: "Guillaume LM",
        photo: (
          <Image
            src="/benevoles/guillaume.webp"
            width={65}
            height={65}
            alt="Guillaume LM"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
    ],
  },
  {
    name: "Approvisionnement",
    color: "#eb7748A6",
    referents: [
      {
        name: "Jean-Phi",
        photo: (
          <Image
            src="/benevoles/jeanphi.webp"
            width={65}
            height={65}
            alt="Jean-Phi"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
      {
        name: "Ana",
        photo: (
          <Image
            src="/benevoles/ana.webp"
            width={65}
            height={65}
            alt="Ana"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
    ],
  },
  {
    name: "Communication",
    color: "#fcc00aA6",
    referents: [
      {
        name: "Aurélie F",
        photo: (
          <Image
            src="/benevoles/aurelie.webp"
            width={65}
            height={65}
            alt="Aurélie F"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
      {
        name: "Hugo D",
        photo: (
          <Image
            src="/benevoles/hugo.webp"
            width={65}
            height={65}
            alt="Hugo D"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
    ],
  },
  {
    name: "Animation",
    color: "#1cafafA6",
    referents: [
      {
        name: "Anne",
        photo: (
          <Image
            src="/benevoles/anne.webp"
            width={65}
            height={65}
            alt="Anne"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
      {
        name: "Furcy",
        photo: (
          <Image
            src="/benevoles/furcy.webp"
            width={65}
            height={65}
            alt="Karen"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
      {
        name: "Maud LH",
        photo: (
          <Image
            src="/benevoles/maud.webp"
            width={65}
            height={65}
            alt="Maud LH"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
    ],
  },
  {
    name: "Admin & Finances",
    color: "#c3e8e5A6",
    referents: [
      {
        name: "Wissam",
        photo: (
          <Image
            src="/benevoles/wissam.webp"
            width={65}
            height={65}
            alt="Wissam"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
      {
        name: "Titouan",
        photo: (
          <Image
            src="/benevoles/titouan.webp"
            width={65}
            height={65}
            alt="Titouan"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
    ],
  },
  {
    name: "Capitainerie",
    color: "#f7e79fA6",
    referents: [
      {
        name: "Cathy",
        photo: (
          <Image
            src="/benevoles/cathy.webp"
            width={65}
            height={65}
            alt="Cathy"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
      {
        name: "Julien C",
        photo: (
          <Image
            src="/benevoles/julien.webp"
            width={65}
            height={65}
            alt="Julien C"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
    ],
  },
  {
    name: "Riposte Généreuse",
    color: "#f5e1d5A6",
    referents: [
      {
        name: "Arthur",
        photo: (
          <Image
            src="/benevoles/arthur.webp"
            width={65}
            height={65}
            alt="Arthur"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
      {
        name: "Murielle",
        photo: (
          <Image
            src="/benevoles/murielle.webp"
            width={65}
            height={65}
            alt="Murielle"
            style={{
              borderRadius: "50%",
            }}
          />
        ),
      },
    ],
  },
];

export default function Fonctionnement({ menu }: PageProps) {
  return (
    <>
      <Head>
        <title>Le Quartier Généreux · Fonctionnement</title>
        <meta
          name="description"
          content="Le calendrier des évènements du Quartier Généreux."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Root menu={menu} style={{ fontSize: "18px" }}>
        <FonctionnementSubTitle size={6}>Notre gouvernance</FonctionnementSubTitle>
        <p>
          Notre fonctionnement est basé sur la{" "}
          <strong>gouvernance partagée</strong> afin d&apos;éviter une forte
          concentration des pouvoirs dans la main de quelques individus.
        </p>
        <p>
          Chaque groupe de travail est représenté par ses co-référent·es qui
          sont en charge de <strong>la coordination du groupe.</strong>
        </p>
        <p>
          Chaque groupe évolue en autonomie. Ses membres sont souverains pour
          prendre des décisions restreintes à son périmètre d&apos;action.{" "}
          <strong>
            Toute personne qui souhaite contribuer au fonctionnement d&apos;un
            groupe est la bienvenue
          </strong>
          , sans qu&apos;il y ait nécessité d&apos;avoir des compétences au
          préalable. Nous préférons la motivation à apprendre et l&apos;esprit
          de coopération plutôt que la connaissance pure et dure.
        </p>
        <p>
          Les référent·es de chaque groupe de travail se réunissent deux fois
          par mois lors de l&apos;Assemblée Généreuse (AGeuse). C&apos;est là
          que sont prises les décisions concernant plusieurs groupes, qui
          peuvent être structurantes pour le QG.
        </p>

        <FonctionnementTitle>Les groupes de travail du QG</FonctionnementTitle>
        <WorkingGroups workingGroups={workingGroups} />

        <FonctionnementSubTitle>Co-présidence</FonctionnementSubTitle>
        <p>
          Le rôle de la co-présidence est de{" "}
          <strong>
            porter la responsabilité juridique de l&apos;association.
          </strong>{" "}
          Les co-président·es agissent en tant que représentant de
          l&apos;association dans les actives civiles et juridiques.
        </p>
        <CoPresidency coPresidency={coPresidency} />
        <p>
          <strong>La co-présidence</strong>, élue via une élection sans
          candidat·e une fois par an, peut s&apos;opposer à une décision prise
          en AGeuse uniquement si celle-ci implique sa responsabilité juridique.
        </p>
      </Root>

      <FonctionnementSubTitle size={4}>
        Le conseil des garant·es
      </FonctionnementSubTitle>
      <p>
        Le conseil des garant·es veille à{" "}
        <strong>la pérennisation des 3 piliers</strong> qui ont été fixés lors
        de la création du Quartier Généreux&nbsp;: un lieu ancré dans le
        quartier, un lieu festif et culturel, un lieu engagé politiquement,
        notions inscrites notamment dans{" "}
        <Link href="/charte">la charte de l’association</Link>.
      </p>
      <p>
        Le <strong>conseil des garant·es</strong>, composé de 9 personnes, élu
        au jugement majoritaire, peut s&apos;opposer à une décision prise en
        AGeuse celle-ci ne respecte pas notre charte.
      </p>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const props = await fetchMenu();
  return { props };
};
