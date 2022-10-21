import Link from 'next/link';
import Head from 'next/head';
import Offer from '/components/Offer';
import { useAppContext } from '/components/GlobalContext';
import { getData } from '/helpers/contentful.helper';

import styles from '/styles/Offer.module.sass'


export async function getServerSideProps({ query }) {
  const { estateType, district, region } = query;

  const offers = await getData(estateType, region, district)


  return {
    props: {
      offers: offers.items,
      district,
    }
  }
};


const OffersList = ({ offers, district }) => {
  const { labels } = useAppContext();
  

  return ( 
    <>
      <Head>
        <title>{labels?.resultsPage.title || ''}{district}</title>
        <meta name='description' content={labels?.resultsPage.metaDescription}/>
      </Head>
      <header className={styles['district-offers-list-header']}>
        <Link href='/buy'>{labels?.buttons.backToSearch || ''}</Link>
        <div>{labels?.resultsPage.found} <span>{offers?.length || 0} </span>{offers?.length === 1 ? labels?.resultsPage.matchOne : labels?.resultsPage.match}</div>
      </header>
      <main className={styles['district-offers']}>
        {(Array.isArray(offers) && offers.length < 1) && 
          <div>{labels?.resultsPage.noResults}</div>
        }
        {(Array.isArray(offers) && offers.length > 0) && 
          <ul className={styles['district-offers-list']}>
              {offers.map(offer => 
                <li key={offer.sys.id} className={styles['single-offer']}>
                    <Offer
                        type={offer.fields?.type}
                        region={offer.fields?.region}
                        district={offer.fields?.district}
                        size={offer.fields?.size}
                        images={offer.fields?.image?.[0]}
                    />
                  <Link href={`/buy/${offer.fields.type}/${offer.fields.region}/${offer.fields.district}/${offer.sys.id}`}>{labels?.buttons.more || ''}</Link>
                </li>
              )}
          </ul>
        }
      </main>
    </>
  )
}

export default OffersList;
