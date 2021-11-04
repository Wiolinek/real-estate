import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Offer from '../../components/offer';


export async function getServerSideProps(context) {
  const { district } = context.query;
  const URI = `http://localhost:3000/api/offers?district=${district}`;
  const encodedURI = encodeURI(URI);
  const response = await fetch(encodedURI);
  const data = await response.json();
  const offers = await data.filter(offer => offer.district === district && offer);

  return {  
    props: {
        offers,
        district,
    },
  }
}


function OffersListByDistrict({ offers }) {
  const router = useRouter();
  const district = router.query.district;

  return ( 
    <>
      <Head>
        <title>Your results - {district}</title>
        <meta name="" content=""/>
      </Head>
      <section>
        <Link href="/buy">Back to search</Link>
        <div className="district-offers-list">
          {offers.map(offer => <Offer key={offer.id} id={offer.id} region={offer.region} district={offer.district} size={offer.size} image={offer.image} />)}
        </div>
      </section>
    </>
  )
}

export default OffersListByDistrict;
