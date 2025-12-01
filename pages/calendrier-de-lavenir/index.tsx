import { GetStaticProps } from "next";
import Head from "next/head";
import { Footer } from "../../components/Footer";
import { Root } from "../../components/Root";
import { Menu } from "../../types/menu";
import { fetchMenu } from "../../utils/fetchMenu";
import React from "react";

import CalendrierDeAvenir from "../../components/CalendrierDeAvenir";

export interface PageProps {
  menu: Menu | null;
}

export default function CalendrierDeLavenir({ menu }: PageProps) {
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
        <CalendrierDeAvenir />
      </Root>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const props = await fetchMenu();
  return { props };
};
