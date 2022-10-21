import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Offer from '/components/Offer'
import { useAppContext } from '/components/GlobalContext';
import { getData } from '/helpers/contentful.helper';

import styles from '/styles/Offer.module.sass';


export const getStaticPaths = async() => {
  
  const entries = await getData();

  const paths = Array.isArray(entries?.items) && entries?.items?.map(entry => {
    return {
      params: {
        offerId: entry.sys.id,
        estateType: entry.fields.type,
        region: entry.fields.region,
        district: entry.fields.district
      }
    }
  })


  return {
    paths,
    fallback: false,
  }
};


export const getStaticProps = async(context) => {
  const { offerId } = context.params;

  const offer = await getData(null, null, null, offerId)

  return {
    props: {
        offer: offer,
    },
  }
};


const OfferComp = ({ offer }) => {
  const router = useRouter();
  const { labels } = useAppContext();
  const item = offer.items[0]?.fields


  return (
    <>
      <Head>
        <title>{labels?.offerPage.title || ''}{offer.items[0]?.sys.id}</title>
        <meta name='description' content={`${item?.typet} in ${item?.district} ${labels?.resultsPage.metaDescription}`}/>
      </Head>
      <header className={styles['filtered-result']}>
        {/* <Link href='/buy'>{labels?.buttons.backToResults || ''}</Link> */}
        <button onClick={() => router.back()}>{labels?.buttons.backToResults || ''}</button>
        <div className={styles.contact}>
          <p>{labels?.offerPage.contact}</p>
          <p>{item?.agentName}</p>
          <span>|</span>
          <p>{item?.contactNumber}</p>
          <span>|</span>
          <p>{item?.contactEmail}</p>
        </div>
      </header>
      <main className={styles['filtered-result']}>
        <Offer
            key={offer.items[0]?.sys.id}
            type={item?.type}
            region={item?.region}
            district={item?.district}
            size={item?.size}
            description={item?.description}
            images={item?.image}
        />
      </main>
    </>
  )
}

export default OfferComp;