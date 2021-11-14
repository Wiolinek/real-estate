import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import Region from '/pages/models/region';
import mongodb from '/lib/mongodb';
import styles from '/styles/Buy.module.sass';


export async function getStaticProps() {

  mongodb();

  const data = await Region.find({});
  const regions = await JSON.parse(JSON.stringify(data));

  return {
    props: {
        regions : regions,
    },
  }
}


function Buy({ regions }) {

  const estateTypes = ['Byt', 'Dům', 'Pozemek'];
  const [regionsState, setRegionsState] = useState(Array.from(new Set(regions.map(region => region.region))));
  const [districtsState, setDistrictsState] = useState();
  const [chosenDistrict, setChosenDistrict] = useState('');
  const [chosenEstateType, setChosenEstateType] = useState('');

  const setDistrictHandler = e => {
    setDistrictsState(regions.filter(region => region.region === e.currentTarget.value && region.district).map(region => region.district));
  };
  
  
  return (
    <>
      <Head>
        <title>BUY something!</title>
        <meta name="" content=""/>
      </Head>
      <section className={styles.buy}>
        <header>
          <h1>Hledáte nemovitost ke koupi?</h1>
        </header>
        <main>
            <p>Se vsem vam pomuzeme. Stačí nám prozradit vaše představy. Vyplňte následující formular a my ho pošleme našim realitním kancelářím, které hend vás budou kontaktovat se svou nabídkou.</p>
            <Link href="/">Zpet</Link>
            <form>
              <label>Typ nemovitosti:<br />
                <select type="select" name="estateType" onChange={e => setChosenEstateType(e.currentTarget.value)}>
                    <option hidden disabled selected> ----- </option>
                    {estateTypes.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
              <label>Kraj ve kterém se nemovitost nachází:<br />
                <select type="select" name="region" onChange={e => setDistrictHandler(e)}>
                    <option hidden disabled selected value="-----"> ----- </option> 
                    {regionsState && regionsState.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
              <label>Okres ve kterém se nemovitost nachází:<br />
                <select type="select" name="district" onChange={e => setChosenDistrict(e.currentTarget.value)}>
                    <option hidden disabled selected value="-----"> ----- </option>
                    {districtsState && districtsState.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
              <Link href={`/buy/${chosenEstateType}/${chosenDistrict}`}>Ukaz nabidky</Link>
              {/* <Link href={`/buy/results`}>Ukaz nabidky</Link> */}
          </form>
        </main>
      </section>
    </>
  );
}

export default Buy;