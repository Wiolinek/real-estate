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
        <ul className={styles.images}>
          {Array.isArray(images) &&
            images.map(image => image.fields?.file?.url &&
              <li className={styles.imageContainer} key={image?.sys?.id}>
                <Image
                  src={`http:${image.fields?.file?.url}`}
                  alt={`${type} ${labels?.offerPage.alt} in ${district} ${labels?.offerPage.districtMeta}`}
                  className={styles.image}
                  layout='fill'
                  objectFit='cover'        
                  placeholder='blur'
                  blurDataURL
                >
                </Image>
              </li>
            
          )}
          {(!Array.isArray(images) && images.fields?.file.url) &&
            <li className={styles.imageContainer} key={images.sys?.id}>
              <Image
                src={`http:${images.fields?.file.url}`}
                alt={`${type} ${labels?.offerPage.alt} in ${district} ${labels?.offerPage.districtMeta}`}
                className={styles.image}
                layout='fill'
                objectFit='cover' 
                placeholder='blur'
                blurDataURL
              >
              </Image>
            </li>
          }
        </ul>
      </div>
    </>
  )
}

export default Offer;