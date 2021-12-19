import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import Theme from './_theme';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #35303F;
    &, body {
      width: 100%;
      height: 100%;
    }

    * {
      font-family: Roboto;
      color: white;
    }
  }
`


function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}

export default App
