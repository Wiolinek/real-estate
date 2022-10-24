import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAppContext } from '../components/GlobalContext'

import styles from '/styles/Basic.module.sass'


const NotFound = () => {
  const { labels } = useAppContext()
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [])

  
  return (
    <>  
      <Head>
        <title>{labels?.errorPage.title || ''}</title>
        <meta name='description' content={labels?.errorPage.metaDescripion}/>
      </Head>
      <header className={styles.basic}>
        <h1>{labels?.errorPage.header}</h1>
      </header>
      <main className={styles.basic}>
        <p className={styles.message}>{labels?.errorPage.redirectionMessage}</p>
      </main>
    </>
  )
}

export default NotFound