import Head from 'next/head'
import Link from 'next/link'
import { useAppContext } from '/components/GlobalContext'

import styles from '/styles/Basic.module.sass'


const FormConfirmation = () => {
  const { labels } = useAppContext()


  return (
    <>
        <Head>
            <title>{labels?.formConfirm.title || ''}</title>
            <meta name='description' content={labels?.formConfirm.metaDescripion}/>
        </Head>
        <header className={styles.basic}>
            <h1>{labels?.formConfirm.header}</h1>
        </header>
        <main className={`${styles.basic} ${styles['form-conf']}`}>
            <p className={styles.message}>{labels?.formConfirm.redirectionMessage}</p>
            <Link href='/'>{labels?.buttons.backToHome || ''}</Link>
        </main>
    </>
  )
}

export default FormConfirmation