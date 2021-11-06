import Link from 'next/link';
import Head from 'next/head';
import Form from '../components/Form';
import { useState } from 'react';
import Region from '../pages/models/region';
import mongodb from '../lib/mongodb';


export async function getStaticProps() {

  mongodb();

  const data = await Region.find();
  const regions = await JSON.parse(JSON.stringify(data));

  return {
    props: {
        regions,
    },
  }
}


function Sell({ regions }) {

  const estateTypes = ['Byt', 'Dům', 'Pozemek'];
  const [regionsState, setRegionsState] = useState(Array.from(new Set(regions.map(region => region.region))));
  const [districtsState, setDistrictsState] = useState();

  const setDistrictHandler = e => {
    setDistrictsState(regions.filter(region => region.region === e.currentTarget.value && region.district).map(region => region.district));
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