import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';


function Flat() {
  const router = useRouter();
  const flatId = router.query.flatId;

  return (
    <>
      <Head>
        <title>Details - offer ID {flatId}</title>
        <meta name="" content=""/>
      </Head>
      <section>
      <Link href="/buy/results">Back to results</Link>
        <div>
          To jsou detaily nabidky cislo {flatId}
        </div>
      </section>
    </>
  )
}

export default Flat;