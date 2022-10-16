import Image from 'next/image';
import { useAppContext } from '../components/GlobalContext';

import styles from '/styles/Offer.module.sass';

const Offer = ({ region, district, size, description, images }) => {
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
          <span>{size} m2</span>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.images}>
          {Array.isArray(images) &&
            images.map(image => image.fields?.file?.url && 
            <Image key={image?.sys?.id} src={`http:${image.fields?.file?.url}`} width={540} height={378} placeholder='blur' blurDataURL></Image>
          )}
          {(!Array.isArray(images) && images.fields?.file.url) &&
            <Image key={images.sys?.id} src={`http:${images.fields?.file.url}`} width={540} height={378} placeholder='blur' blurDataURL></Image>
          }
        </div>
      </div>
    </>
  )
}

export default Offer;