import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Root } from '../components/Root';
import styles from '../styles/Home.module.css'
import { Menu, parseMenus } from '../types/menu';
import { Page } from '../types/page';

export default function Home({ title, description, menu, page }: { title: string, description: string, page: Page, menu: Menu }) {
  console.log("title", title, menu, page);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Root menu={menu}>
        <h1 className={styles.title} dangerouslySetInnerHTML={{ __html: page.title }} />
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </Root>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch('http://quartiu.cluster031.hosting.ovh.net/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        {
          generalSettings {
              url, title, description
          }
          menus(where: {location: PRIMARY}, first: 1) {
            nodes {
              id
              name
              menuItems {
                nodes {
                  id
                  label
                  description
                  order
                  title
                  uri
                  parentId
                }
              }
            }
          }
          homePage: nodeByUri(uri: "/") {
            id
            isContentNode
            isTermNode
            uri
            ... on Page {
              id
              slug
              status
              title(format: RENDERED)
              uri
              content(format: RENDERED)
            }
            ... on Post {
              id
            }
          }
        }
    `,
    }),
  })
  const { data: {
    generalSettings: { title, description },
    homePage,
    menus: { nodes: wpMenus }
  } } = await res.json();
  console.log("wpMenus", wpMenus);
  console.log("homePage", homePage);
  const menu = wpMenus.length > 0 ? parseMenus(wpMenus[0]) : null;
  return { props: { title, description, menu, page: homePage } };
}
