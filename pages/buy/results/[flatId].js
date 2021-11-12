import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Offer from '/components/Offer'
import mongodb from '/lib/mongodb';
import OfferModel from '/pages/models/offer';
import styles from '/styles/Offer.module.css';



// export async function getStaticPaths() {
//   const response = await fetch(`http://localhost:3000/api/offers`);
//   const data = await response.json();

//   const paths = data.map(offer => {
//     return {
//       params: {
//         flatId: `${offer.id}`
//       }
//     }
//   })

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export async function getStaticProps(context) {
//   const { flatId } = context.params;
//   const response = await fetch(`http://localhost:3000/api/offers`); /* ? */
//   const data = await response.json();
//   const offer = await data.filter(offer => offer.id === flatId && offer);

//   console.log(offer)

//   return {
//     props: {
//         offer: offer,
//     },
//   }
// }

export async function getServerSideProps(context) {
  const flatId = context.params.flatId;

  mongodb();

  const data = await OfferModel.findById({_id: flatId});
  const offer = await JSON.parse(JSON.stringify(data));

  return {
    props: {
        offer,
    },
  }
}


function Flat({offer}) {
  const router = useRouter();
  const flatId = router.query._id;

  return (
    <>
      <Head>
        <title>Details - offer ID {flatId}</title>
        <meta name="" content=""/>
      </Head>
      <section className={styles['filtered-results']}>
      <button onClick={() => router.back()}>Back to results</button>
        <Offer region={offer.region} district={offer.district} size={offer.size} description={offer.description} image={offer.image}/>
      </section>
    </>
  )
}

export default Flat;