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
      <meta name="theme-color" content="#6C2DB3" />
      <link rel="shortcut icon" href="/img/icon-512.png" />
      <link rel="apple-touch-icon" href="/img/icon-512.png" />
    </Head>
    <NextSeo
      title="Anna Fernandes | Portfolio"
      description="Hi, I'm Anna! I'm a product designer. This is my portfolio."
      canonical="https://anna-fernandes-portfolio.vercel.app/"
      openGraph={{
        url: 'https://anna-fernandes-portfolio.vercel.app/',
        title:
          'Anna Fernandes | Portfolio',
        description:
          "Hi, I'm Anna! I'm aux/ui designer. This is my portfolio.",
        images: [{ url: 'https://cdn.sanity.io/images/mvtxa8e7/production/0b71c74a942824cd97e56d08b5003c51a46e0178-3200x3200.png' }],
        site_name: 'Anna Fernandes | Portfolio',
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
