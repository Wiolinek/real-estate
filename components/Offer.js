import Image from 'next/image';
import Link from 'next/link';

function Offer({ id, region, district, size, description, image }) {

  return (
    <>
      <div className="offer">
        <h3 className="offer__region">{region}</h3>
        <h3 className="offer__district">{district}</h3>
        <h3 className="offer__size">{size} m2</h3>
        <Image src={image} width={600} height={420}></Image>
        <p className="offer__description">{description}</p>
        <Link href={`/buy/results/${id}`}>Read more...</Link>
      </div>
    </>
  )
}

export default Offer;