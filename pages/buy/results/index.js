// import Link from 'next/link';
// import Head from 'next/head';
// import Offer from '../../../components/Offer';
// import OfferModel from '../../models/offer';
// import mongodb from '../../../lib/mongodb';

// export async function getServerSideProps() {

//   mongodb();

//   const data = await OfferModel.find({});
//   const offers = await JSON.parse(JSON.stringify(data));
//   console.log(offers)

//   return {
//     props: {
//         offers,
//     },
//   }
// }


// function Results({ offers }) {
//   console.log(offers)

//   return ( 
//     <>
//       <Head>
//         <title>Your results</title>
//         <meta name="" content=""/>
//       </Head>
//       <section>
//         <Link href="/buy">Back to search</Link>
//         <div className="offers-list">
//           {offers.length > 0 ? offers.map(offer => 
//             <div className="single-offer">
//               <Offer key={offer._id} id={offer._id} region={offer.region} district={offer.district} size={offer.size} image={offer.image} />
//               <Link href={`/buy/results/${offer._id}`}>Read more...</Link>
//             </div>
//             ) :
//             <p>We could not find anything. Try again.</p>}
//         </div>
//       </section>
//     </>
//   )
// }

// export default Results;
