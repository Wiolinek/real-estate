import Link from 'next/link';
import Head from 'next/head';
import Offer from '/components/offer';
import { useAppContext } from '/components/GlobalContext';
import { getData } from '/helpers/contentful.helper';

import styles from '/styles/Offer.module.sass'


export async function getServerSideProps({ query }) {
  const { estateType, district, region } = query;

  const offers = await getData(estateType, region, district)


  return {
    props: {
      offers: offers.items,
      estateType,
      district,
      region,
    }
  }
};


const OffersList = ({ offers, district }) => {
  const { labels } = useAppContext();

  return ( 
    <>
      <Head>
        <title>{labels?.resultsPage.title}{district}</title>
        <meta name='' content=''/>
      </Head>
      <header>
        <Link href='/buy'>{labels?.buttons.backToSearch || ''}</Link>
        <div>{labels?.resultsPage.found} {offers?.length || 0} {labels?.resultsPage.match}</div>
      </header>
        
      <main>
        <div className={styles['district-offers-list']}>
          {(Array.isArray(offers) && offers.length < 1) && 
            <div>{labels?.resultsPage.noResults}</div>
          }
          {Array.isArray(offers) && offers.map(offer => 
            <div key={offer.sys.id} className={styles['single-offer']}>
                <Offer
                    region={offer.fields.region}
                    district={offer.fields.district}
                    size={offer.fields.size}
                    image={offer.fields.image}
                />
              <Link href={`/buy/${offer.fields.type}/${offer.fields.region}/${offer.fields.district}/${offer.sys.id}`}>{labels?.buttons.more || ''}</Link>
            </div>
          )}
        </div>
      </main>
    </>
  )
}

export default OffersList;
