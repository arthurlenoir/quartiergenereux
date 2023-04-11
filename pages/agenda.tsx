import { GetStaticProps } from 'next';
import Head from 'next/head'
import { Footer } from '../components/Footer';
import { Root } from '../components/Root';
import { Menu } from '../types/menu';
import { fetchMenu } from '../utils/fetchMenu';
import { Agenda } from '../components/Agenda';

export interface PageProps {
    menu: Menu | null;
}


export default function AgendaPage({ menu }: PageProps) {
    return (
        <>
            <Head>
                <title>Le Quartier Généreux · Agenda</title>
                <meta name="description" content="Le calendrier des évènements du Quartier Généreux." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Root menu={menu}>
                <h1>Agenda</h1>
                <Agenda />
            </Root>
            <Footer />
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const props = await fetchMenu()
    return { props };
}