import Head from 'next/head'
import { NextSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global.styles'

import Header from '../components/Header'
import Footer from '../components/Footer'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
    <Head>
      <meta name="theme-color" content="#06092B" />
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
    </Head>
    <NextSeo
      title="Portfolio"
      description=""
      canonical=""
      openGraph={{
        url: '',
        title:
          'Portfolio',
        description:
          '',
        images: [{ url: '' }],
        site_name: 'Portfolio',
        locale: 'pt_BR'
      }}
    />
    <GlobalStyle />
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
  
}

export default MyApp
