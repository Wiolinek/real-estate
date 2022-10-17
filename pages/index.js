import Link from 'next/link';
import Head from 'next/head';
import { useAppContext } from '../components/GlobalContext';

import styles from '/styles/Home.module.sass';


const Home = () => {
  const { labels } = useAppContext();

  
  return (
    <>
      <Head>
        <title>{labels?.homepage.headerPrimary}</title>
        <meta name='' content=''/>
      </Head>
      <header className={styles.home}>
        <h1>{labels?.homepage.headerPrimary}</h1>
        <h2>{labels?.homepage.headerSecondary}</h2>
      </header>
      <main className={styles.home}>
        <Link href='/sell'>{labels?.buttons.sell || ''}</Link>
        <Link href='/buy'>{labels?.buttons.buy || ''}</Link>
      </main>
    </>
  )
}

export default Home;