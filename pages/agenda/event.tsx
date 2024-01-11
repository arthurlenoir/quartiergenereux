import { GetStaticProps } from "next";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Root } from "../../components/Root";
import { Menu } from "../../types/menu";
import { fetchMenu } from "../../utils/fetchMenu";
import { GoogleAgenda } from "../../components/Agenda";
import { useRouter } from "next/router";
import { GoogleAgendaEventPage } from "../../components/Agenda/GoogleAgendaEventPage";
import { useEffect } from "react";

export interface PageProps {
  menu: Menu | null;
}

export default function EventPage({ menu }: PageProps) {
  const { asPath, replace } = useRouter();
  const parsedUrl = new URL(asPath, "http://localhost");
  const eventId = parsedUrl.searchParams.get("eventId");

  useEffect(() => {
    if (!eventId) {
      replace("/agenda");
    }
  }, [eventId, replace]);

  if (!eventId) {
    return null;
  }
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
        <GoogleAgendaEventPage
          calendarId="1a765f00b1b3157f7f659f5d0f7343cc9b27d1ece10523108b5adf9ff5f98c82@group.calendar.google.com"
          eventId={eventId as string}
        />
      </Root>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const props = await fetchMenu();
  return { props };
};
