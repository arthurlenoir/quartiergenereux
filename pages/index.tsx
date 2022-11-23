import { GetStaticProps } from 'next'
import { fetchPage } from '../utils/fetchPage';
import PageView, { PageProps } from './[pageUri]';

export default function Home(props: PageProps) {
  return <PageView {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const props = await fetchPage('/');
  return { props };
}
