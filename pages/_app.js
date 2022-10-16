import Layout from '/components/Layout';
import { Context } from '/components/GlobalContext';

import '/styles/globals.sass';


const MyApp = ({ Component, pageProps }) => {


  return (
    <Context >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  )
}

export default MyApp;
