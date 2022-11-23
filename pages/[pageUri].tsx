import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Root } from '../components/Root';
import styles from '../styles/Home.module.css'
import { Menu, parseMenus } from '../types/menu';
import { Page } from '../types/page';
import { fetchPage } from '../utils/fetchPage';

export interface PageProps {
  title: string;
  description: string;
  page: Page;
  menu: Menu | null;
}

export default function PageView(props: PageProps) {
  const router = useRouter();
  const { pageUri } = router.query;
  const [{ title, description, menu, page }, setState] = useState<PageProps>(props);
  useEffect(() => {
    if (!title || !page) {
      fetchPage(pageUri as string).then(r => setState(r));
    }
  })
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Root menu={menu}>
        {page && <><h1 className={styles.title} dangerouslySetInnerHTML={{ __html: page.title }} />
          <div dangerouslySetInnerHTML={{ __html: page.content }} /></>}
      </Root>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageUri = context.params!.pageUri as string;
  const props = await fetchPage(pageUri)
  return { props };
}


export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://quartiu.cluster031.hosting.ovh.net/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        {
          pages(where: {status: PUBLISH}) {
            nodes {
              content(format: RENDERED)
              date
              dateGmt
              desiredSlug
              id
              isFrontPage
              isPostsPage
              slug
              status
              title(format: RENDERED)
              uri
            }
          }
        }
    `,
    }),
  })
  const json = await res.json();
  const pages = json.data.pages.nodes as Page[];
  return {
    paths: pages.map(page => ({ params: { pageUri: page.slug, fallback: 'blocking' } })),
    fallback: true
  }

}