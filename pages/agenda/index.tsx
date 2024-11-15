import { GetStaticProps } from "next";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Root } from "../../components/Root";
import { Menu } from "../../types/menu";
import { fetchMenu } from "../../utils/fetchMenu";
import { GoogleAgenda } from "../../components/Agenda";

import { PetitionTerrasse } from "../../views/PetitionTerrasse";

export interface PageProps {
  menu: Menu | null;
}

export default function AgendaPage({ menu }: PageProps) {
  return (
    <>
      <Head>
        <title>Le Quartier Généreux · Agenda</title>
        <meta
          name="description"
          content="Le calendrier des évènements du Quartier Généreux."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Root menu={menu}>
        <PetitionTerrasse />
        <h1>Agenda</h1>
        <GoogleAgenda calendarId="1a765f00b1b3157f7f659f5d0f7343cc9b27d1ece10523108b5adf9ff5f98c82@group.calendar.google.com" />
      </Root>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const props = await fetchMenu();
  return { props };
};
