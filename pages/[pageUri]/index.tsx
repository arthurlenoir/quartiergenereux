import { GetStaticPaths, GetStaticProps } from 'next'
import { Menu } from '../../types/menu';
import { Page } from '../../types/page';
import { fetchPage } from '../../utils/fetchPage';
import PageView from '../[pageUri]';

export interface PageProps {
    title: string;
    description: string;
    page: Page;
    menu: Menu | null;
}

export default PageView;

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