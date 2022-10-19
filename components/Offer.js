import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useAppContext } from '../components/GlobalContext';

import styles from '/styles/Offer.module.sass';

const Offer = ({ type, region, district, size, description, images }) => {
  const { labels } = useAppContext();


  return (
    <>
      <div className={styles.offer}>
        <div className={styles.detail}>
          <span>{labels?.offerPage.region}</span>
          <span>{region}</span>
        </div>
        <div className={styles.detail}>
          <span>{labels?.offerPage.district}</span>
          <span>{district}</span>
        </div>
        <div className={styles.detail}>
          <span>{labels?.offerPage.size}</span>
          <span>{size} m<sup>2</sup></span>
        </div>
        <div className={styles.description}>{documentToReactComponents(description)}</div>
        <div className={styles.images}>
          {Array.isArray(images) &&
            images.map(image => image.fields?.file?.url &&
              <div className={styles.imageContainer}>
                <Image
                  key={image?.sys?.id}
                  src={`http:${image.fields?.file?.url}`}
                  alt={`${type} ${labels?.offerPage.alt} in ${district} ${labels?.offerPage.districtMeta}`}
                  className={styles.image}
                  layout='fill'
                  width={540}
                  height={378}
                  placeholder='blur'
                  blurDataURL
                >
                </Image>
              </div>
            
          )}
          {(!Array.isArray(images) && images.fields?.file.url) &&
            <div className={styles.imageContainer}>
              <Image
                key={images.sys?.id}
                src={`http:${images.fields?.file.url}`}
                alt={`${type} ${labels?.offerPage.alt} in ${district} ${labels?.offerPage.districtMeta}`}
                className={styles.image}
                layout='fill'
                placeholder='blur'
                blurDataURL
              >
              </Image>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Offer;