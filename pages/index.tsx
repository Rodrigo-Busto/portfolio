import type { NextPage } from 'next'
import { HomeNavbar } from '../components';
import { TransparentButton } from '../modules'

const Home: NextPage = () => {
  return (
    <>
      <header>
        <HomeNavbar/>
      </header>
      <body>
        <TransparentButton/>
      </body>
    </>
  )
}

export default Home
