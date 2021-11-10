import Image from 'next/image';
import styles from '../styles/Offer.module.css';

function Offer({ region, district, size, description, image }) {

  return (
    <>
      <div className={styles.offer}>
        <h3>{region}</h3>
        <h3>{district}</h3>
        <h3>{size} m2</h3>
        <Image src={image} width={540} height={378}></Image>
        <p>{description}</p>
      </div>
    </>
  )
}

export default Offer;