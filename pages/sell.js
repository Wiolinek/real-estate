import { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Form from '/components/SellForm';
import { useAppContext } from '../components/GlobalContext';
// import Client from '/pages/api/models/client';
// const Client = require('/pages/api/models/client')
import mongodb from '/lib/mongodb';
import { districtHandler } from '../helpers/form.helper';
import { variables } from '../utils/globals'
// import { districtHandler } from '../helpers/form.helper';
import styles from '/styles/Form.module.sass';


// export async function getStaticProps() {

//   mongodb();

//   const data = await Region.find();
//   const regions = await JSON.parse(JSON.stringify(data));

//   return {
//     props: {
//         regions,
//     },
//   }
// }


const Sell = () => {
  const { regions, labels } = useAppContext();
  const [districtsState, setDistrictsState] = useState();
  const [chosenRegion, setChosenRegion] = useState(variables.defaultValue);
  const [chosenDistrict, setChosenDistrict] = useState(variables.defaultValue);
  const [chosenEstateType, setChosenEstateType] = useState(variables.defaultValue);
  
  const sendToDB = (data) => {
    mongodb();
    // db.collection('clients').insertOne(data)
    // console.log(data)
    // await Client.insertOne(data);
    // await Client.create(data);

    const newClient = new Client(data);
    newClient.save();
  }

  useEffect(() => {
    setDistrictsState(districtHandler(chosenRegion, regions));
  }, [chosenRegion])


  return (
    <>  
      <Head>
        <title>{labels?.sellPage.title || ''}</title>
        <meta name='description' content={labels?.sellPage.metaDescription}/>
        <link rel='icon' href='/logo.svg' />
      </Head>
      <header className={styles.form}>
        <h1>{labels?.sellPage.header}</h1>
      </header>
      <main className={styles.form}>
        <article>
          <p className={styles.text}>{labels?.sellPage.text}</p>
          <Link href='/'>{labels?.buttons.back || ''}</Link>
        </article>
        <Form
          districtsState={districtsState}
          chosenRegion={chosenRegion}
          chosenDistrict={chosenDistrict}
          chosenEstateType={chosenEstateType}
          setChosenDistrict={setChosenDistrict}
          setChosenRegion={setChosenRegion}
          setChosenEstateType={setChosenEstateType}
          sendToDB={sendToDB}
        />
      </main>
    </>
  )
}

export default Sell;