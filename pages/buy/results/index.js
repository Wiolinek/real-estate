import Link from 'next/link';
import Head from 'next/head';
import Offer from '../../../components/offer';
import OfferModel from '../../models/offer';
import mongodb from '../../../lib/mongodb';

export async function getServerSideProps() {

  mongodb();

  const data = await OfferModel.find({});
  const offers = await JSON.parse(JSON.stringify(data));

  return {
    props: {
        offers,
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
          {offers.map(offer => 
            <div className="single-offer">
              <Offer key={offer.id} id={offer.id} region={offer.region} district={offer.district} size={offer.size} image={offer.image} />
              <Link href={`/buy/results/${offer.id}`}>Read more...</Link>
            </div>
            )}
        </div>
      </section>
    </>
  )
}

export default Results;
