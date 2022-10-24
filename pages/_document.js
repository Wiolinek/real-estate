import Document, { Html, Head, Main, NextScript} from 'next/document'


const MyDocument = () => {


  return (
    <Html>
      <Head lang='en'>
        <link rel='icon' href='/logo.svg' />
      </Head>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}

export default MyDocument
