import Image from 'next/image';
import Link from 'next/link';

function Offer() {

  return (
    <>
      
      <div className="offer">
        <h2 className="offer__type">Dum</h2>
        <h3 className="offer__region">Jihočeský kraj</h3>
        <h3 className="offer__district">Okres České Budějovice</h3>
        <Image src="/images/houses/house_1.jpg" width={600} height={420}></Image>
        <p className="offer__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae corporis mollitia quidem ullam, voluptatum ipsa quaerat perspiciatis. Eaque ad dicta voluptatum consectetur sequi, facere, ex ducimus, maiores similique quisquam molestias. Voluptate recusandae deleniti debitis eius voluptatem excepturi qui ea magni quibusdam iure dicta reprehenderit odit, quo non dolore, quod laboriosam, ut est porro aperiam. Sint voluptates ducimus in culpa quidem dignissimos repudiandae architecto eveniet inventore. Commodi magni amet inventore fuga.</p>
        <Link href="/buy/results/1">Read more...</Link>
      </div>
    </>
  )
}

export default Offer;




// function User({ user }) {

//   return (
//     <>
//         <p>{user.name}</p>
//         <p>{user.email}</p>
//     </>
//   )
// }

// export default User;