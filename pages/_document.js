import PiwikPro from '@piwikpro/react-piwik-pro';
import { Html, Head, Main, NextScript } from 'next/document';

PiwikPro.initialize('5ffa58d3-7184-4d0b-8c59-623075da72a0', 'https://qg.containers.piwik.pro');

export default function Document() {
  return (
    <Html lang='fr-FR'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}