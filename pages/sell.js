import Link from 'next/link';
import Head from 'next/head';
import Form from '../components/Form';
import { useState } from 'react';


export async function getStaticProps() {
    
  const response = await fetch('http://localhost:3000/api/regions');
  const data = await response.json();

  return {
      props: {
          regions: data,
      },
  }
}

function Sell({ regions }) {

  const estateTypes = ['Byt', 'Dům', 'Pozemek'];
  const [regionsState, setRegionsState] = useState(Array.from(new Set(regions.map(region => region.region))));
  const [districtsState, setDistrictsState] = useState();

  const setDistrictHandler = e => {
    setDistrictsState(regions.filter(region => region.region === e.target.value && region.district));
};
  

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
          <p className="sale-text">Najdeme vám makléře, který všechno pro vás zaridi. Správně nafoti, naceni a zainzeruje. Stačí jen vyplnit nas krátký formulář o nemovitosti a hned vas budeme kontaktovat.
          </p>
          <Link href="/">Zpet</Link>
          <Form estateTypes={estateTypes} regionsState={regionsState} districtsState={districtsState} setDistrictHandler={setDistrictHandler} />
        </main>
      </section>
    </>
  )
}

export default Sell;