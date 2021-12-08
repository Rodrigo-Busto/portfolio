import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import "bootstrap/dist/css/bootstrap.css";
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: Roboto;
    color: white;
  }
  body {
    background-color: #35303F
  }
`

const theme = {
  colors: {
    primary: "#3762FA"
  }
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
