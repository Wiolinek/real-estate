import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Offer from '/components/offer';
import OfferModel from '/pages/models/offer';
import mongodb from '/lib/mongodb';
import styles from '/styles/Offer.module.sass'


// export async function getServerSideProps(context) {
//   const { district } = context.query;
//   const URI = `http://localhost:3000/api/offers`;
//   const encodedURI = encodeURI(URI);
//   const response = await fetch(encodedURI);
//   const data = await response.json();
//   const offers = await data.filter(offer => offer.district === district && offer);

//   return {  
//     props: {
//         offers,
//         district,
//     },
//   }
// }

export async function getServerSideProps(context) {
  const [ estateType, district ] = context.params.params;
  const estate = estateType.toLowerCase();

  mongodb();

  const data = await OfferModel.find({district: district, type: estate});
  const offers = await JSON.parse(JSON.stringify(data));
  // console.log(offers);

  return {
    props: {
        offers,
        district,
        estateType,
    },
  }
}


function OffersListByDistrict({ offers, district }) {

  return ( 
    <>
      <Head>
        <title>Your results - {district}</title>
        <meta name="" content=""/>
      </Head>
      <section>
        <Link href="/buy">Back to search</Link>
        <div className={styles['district-offers-list']}>
          {offers.map(offer => 
            <div className={styles['single-offer']}>
              <Offer key={offer._id} region={offer.region} district={offer.district} size={offer.size} image={offer.image}/>
              <Link href={`/buy/results/${offer._id}`}>Read more...</Link>
            </div>
            )}
        </div>
      </section>
    </>
  )
}

export default OffersListByDistrict;
