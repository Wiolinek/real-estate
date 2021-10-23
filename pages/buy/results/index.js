// import User from '../../../components/user';

// function Results({ users }) {
//   return (
//     <div>
//       {
//       users.map(user =>
//       <div key={user.id}>
//         <User user={user} />
//       </div>)
//       }
//     </div>
//   )
// }

// export default Results;

// export async function getStaticProps() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await response.json();

//   return {
//     props: {
//       users: data,
//     },
//   }
// }


import Link from 'next/link';
import Head from 'next/head';
import Offer from '../../../components/offer';


function Results() {
  return (
    <>
      <Head>
        <title>Your results</title>
        <meta name="" content=""/>
      </Head>
      <section>
        <Link href="/buy">Back to search</Link>
        <div>
          <Offer />
        </div>
      </section>
    </>
  )
}

export default Results;
