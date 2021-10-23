import Link from 'next/link';
import Head from 'next/head';
import Form from '../components/Form';



function Sell() {

  return (
    <>
      <Head>
        <title>SELL something!</title>
        <meta name="" content=""/>
      </Head>
      <section className="sale">
        <header>
          <h1>Chcete prodát svoji nemovitost?</h1>
        </header>
        <main>
          <p>Najdeme vám makléře, který všechno pro vás zaridi. Správně nafoti, naceni a zainzeruje. Stačí jen vyplnit nas krátký formulář o nemovitosti a hned vas budeme kontaktovat.
          </p>
          <Link href="/">Zpet</Link>
          <Form />
        </main>
      </section>
    </>
  )
}

export default Sell;