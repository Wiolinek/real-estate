import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';


function Home() {
  return (
    <>
      <Head>
        <title>Welcome!</title>
        <meta name="" content=""/>
      </Head>
      <section className={styles.main}>
        <header>
          <h1>Welcome</h1>
          <h2>What would you like to do?</h2>
        </header>
        <main>
          <Link href="/sell">Prodat nemovitost</Link>
          <Link href="/buy">Koupit nemovitost</Link>
        </main>
      </section>
    </>
  )
}

export default Home;