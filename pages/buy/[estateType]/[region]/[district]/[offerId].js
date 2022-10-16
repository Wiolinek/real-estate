import Link from 'next/link';
import Head from 'next/head';
import Offer from '/components/Offer'
import { useAppContext } from '/components/GlobalContext';
import { getData } from '/helpers/contentful.helper';

import styles from '/styles/Offer.module.sass';


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
  const { estateType, district, region, offerId } = context.params;

  const offer = await getData(estateType, region, district, offerId)

  return {
    props: {
        offer,
    },
  }
}


const OfferComp = ({ offer }) => {
  const { labels } = useAppContext();
  const item = offer.items[0]?.fields


  return (
    <>
      <Head>
        <title>{labels?.offerPage.title || ''}{offer.items[0]?.sys.id}</title>
        <meta name='' content=''/>
      </Head>
      <header>
        <Link href='/buy'>{labels?.buttons.backToResults || ''}</Link>
        <div className={styles.contact}>
          <span>{labels?.offerPage.contact}</span>
          <span>Imię i nazwisko</span>
          <span>Telefon</span>
          <span>Email</span>
        </div>
      </header>
      <main className={styles['filtered-results']}>
      
        <Offer
            key={offer.items[0]?.sys.id}
            region={item?.region}
            district={item?.district}
            size={item?.size}
            description={item?.description.content[0].content[0].value}
            images={item?.image}
        />
      </main>
    </>
  )
}

export default OfferComp;