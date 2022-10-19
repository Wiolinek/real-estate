import Link from 'next/link';
import Head from 'next/head';
import { useAppContext } from '../components/GlobalContext';

import styles from '/styles/Basic.module.sass';


const Home = () => {
  const { labels } = useAppContext();

  
  return (
    <>
      <Head>
        <title>{labels?.homepage.title || ''}</title>
        <meta name='description' content={labels?.homepage.metaDescription}/>
        <link rel='icon' href='/logo.svg' />
      </Head>
      <header className={styles.basic}>
        <h1>{labels?.homepage.headerPrimary}</h1>
        <h2>{labels?.homepage.headerSecondary}</h2>
      </header>
      <main className={styles.basic}>
        <Link href='/sell'>{labels?.buttons.sell || ''}</Link>
        <Link href='/buy'>{labels?.buttons.buy || ''}</Link>
      </main>
    </>
  )
}

export default Home;