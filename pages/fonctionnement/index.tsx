import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import { Root } from "../../components/Root";
import { WorkingGroups } from "../../components/Fonctionnement";
import { Menu } from "../../types/menu";
import { fetchMenu } from "../../utils/fetchMenu";
import { WorkingGroup } from "../../components/Fonctionnement/WorkingGroups/WorkingGroup.types";
import { FonctionnementTitle } from "../../components/Fonctionnement/FonctionnementTitle";

export interface PageProps {
  menu: Menu | null;
}

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
      <Root menu={menu}>
        <FonctionnementTitle>Les groupes de travail du QG</FonctionnementTitle>
        <WorkingGroups workingGroups={workingGroups} />
      </Root>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const props = await fetchMenu();
  return { props };
};
