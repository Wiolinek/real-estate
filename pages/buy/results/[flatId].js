import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Offer from '../../../components/Offer';

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:3000/api/offers`);
  const data = await response.json();

  const paths = data.map(offer => {
    return {
      params: {
        flatId: `${offer.id}`
      }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`http://localhost:3000/api/offers?id=${params.flatId}`);
  const data = await response.json();
  const offer = await data.filter(offer => offer.id === params.flatId && offer);

  console.log(offer)

  return {
    props: {
        offer: data,
    },
  }
}


function Flat({ offer }) {
  const router = useRouter();
  const flatId = router.query.flatId;
  

  return (
    <>
      <Head>
        <title>Details - offer ID {flatId}</title>
        <meta name="" content=""/>
      </Head>
      <section>
      <Link href="/buy/results">Back to results</Link>
        <div>
          To jsou detaily nabidky cislo {flatId}
        </div>
        {/* <Offer id={offer.id} region={offer.region} district={offer.district} size={offer.size} description={offer.description}/> */}
      </section>
    </>
  )
}

export default Flat;