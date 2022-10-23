import Link from 'next/link';
import Head from 'next/head';
import { useAppContext } from '../components/GlobalContext';
import { schemaMarkupHandler, descriptionHandler } from '/helpers/schemaMarkup.helper';

import styles from '/styles/Basic.module.sass';


const Home = () => {
  const { labels } = useAppContext();

  const schema = schemaMarkupHandler('organization');

  
  return (
    <>
      <Head>
        <title>{labels?.homepage.title || ''}</title>
        <meta name='description' content={labels?.homepage.metaDescription}/>
        <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: schema } }></script>
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