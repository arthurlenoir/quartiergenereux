import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ArticlePreview } from "../components/ArticlePreview";
import { Footer } from "../components/Footer";
import { HomePageHeader } from "../components/HomePageHeader";
import { Root } from "../components/Root";
import styles from "../styles/Home.module.css";
import { Menu } from "../types/menu";
import { Page } from "../types/page";
import { fetchPage } from "../utils/fetchPage";
import { GoogleAgendaPreview } from "../components/Agenda/GoogleAgendaPreview";
import { PetitionTerrasse } from "../views/PetitionTerrasse";

export interface PageProps {
  title: string;
  description: string;
  page: Page;
  lastPost?: Page;
  menu: Menu | null;
  isHomePage?: boolean;
}

export default function PageView({ isHomePage, ...props }: PageProps) {
  const router = useRouter();
  const { pageUri } = router.query;
  const [{ title, description, menu, page, lastPost }, setState] =
    useState<PageProps>(props);
  console.log(isHomePage, props.lastPost, lastPost);
  useEffect(() => {
    if (!props.title || !props.page) {
      console.log(pageUri, pageUri === "/");
      fetchPage(pageUri as string, pageUri === "/").then((r) => setState(r));
    }
  }, [props.title, props.page, pageUri, setState]);

  return (
    <>
      <Head>
        <title>{page ? page.title : title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={page ? page.title : title} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://quartiergenereux.fr/${pageUri || ""}`}
        />
        {page?.featuredImage?.node?.mediaItemUrl && (
          <meta
            property="og:image"
            content={page.featuredImage.node.mediaItemUrl}
          />
        )}
      </Head>
      <Root menu={menu}>
        {isHomePage && <HomePageHeader />}
        {isHomePage && lastPost && <ArticlePreview article={lastPost} />}
        {isHomePage && <PetitionTerrasse />}

        {isHomePage && (
          <GoogleAgendaPreview calendarId="1a765f00b1b3157f7f659f5d0f7343cc9b27d1ece10523108b5adf9ff5f98c82@group.calendar.google.com" />
        )}
        {page && (
          <>
            {!isHomePage && (
              <h1
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: page.title }}
              />
            )}
            <div
              className={styles.pageContent}
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          </>
        )}
      </Root>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageUri = context.params!.pageUri as string;
  const props = await fetchPage(pageUri);
  return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://wp.quartiergenereux.fr/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        {
          pages(where: {status: PUBLISH}) {
            nodes {
              slug
              uri
            }
          }
          posts(where: { status: PUBLISH }) {
            nodes {
              slug
              uri
            }
          }
        }
    `,
    }),
  });
  const json = await res.json();

  const pages = json.data.pages.nodes as Page[];
  const posts = json.data.posts.nodes as Page[];
  return {
    paths: [
      ...pages.map((page) => ({ params: { pageUri: page.slug } })),
      ...posts.map((page) => ({ params: { pageUri: page.slug } })),
    ],
    fallback: true,
  };
};
