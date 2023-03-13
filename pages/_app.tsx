import PiwikProProvider from '@piwikpro/next-piwik-pro'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <PiwikProProvider
    accountName='https://qg.containers.piwik.pro'
    containerId='5ffa58d3-7184-4d0b-8c59-623075da72a0'
  ><Component {...pageProps} /></PiwikProProvider>
}
