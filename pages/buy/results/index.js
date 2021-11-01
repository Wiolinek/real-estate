import Link from 'next/link';
import Head from 'next/head';
import Offer from '../../../components/offer';

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:3000/api/offers`);
  const data = await response.json();

  return {
    props: {
        offers: data,
    },
  }
}


function Results({ offers }) {
  return ( 
    <>
      <Head>
        <title>Your results</title>
        <meta name="" content=""/>
      </Head>
      <section>
        <Link href="/buy">Back to search</Link>
        <div className="offers-list">
          {offers.map(offer => <Offer key={offer.id} id={offer.id} region={offer.region} district={offer.district} size={offer.size} image={offer.image} />)}
        </div>
      </section>
    </>
  )
}

export default Results;
