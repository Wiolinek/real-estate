import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Form from '/components/Form/SellForm'
import { useAppContext } from '/components/GlobalContext'
import { generateDistricts } from '/helpers/form.helper'
import { variables } from '/utils/globals'

import styles from '/styles/Form.module.sass'


const Sell = () => {
  const { regions, labels } = useAppContext()
  const [districtsState, setDistrictsState] = useState()
  const [chosenRegion, setChosenRegion] = useState(variables.defaultValue)
  const [chosenDistrict, setChosenDistrict] = useState(variables.defaultValue)
  const [chosenEstateType, setChosenEstateType] = useState(variables.defaultValue)

  useEffect(() => {
    setDistrictsState(generateDistricts(chosenRegion, regions))
  }, [chosenRegion])


  return (
    <>  
      <Head>
        <title>{labels?.sellPage.title || ''}</title>
        <meta name='description' content={labels?.sellPage.metaDescription}/>
      </Head>
      <header className={styles.form}>
        <h1>{labels?.sellPage.header}</h1>
      </header>
      <main className={`${styles.form} ${styles.sell}`}>
        <article>
          <p className={styles.text}>{labels?.sellPage.text}</p>
          <Link href='/'>{labels?.buttons.back || ''}</Link>
        </article>
        <Form
          districtsState={districtsState}
          chosenRegion={chosenRegion}
          chosenDistrict={chosenDistrict}
          chosenEstateType={chosenEstateType}
          setChosenDistrict={setChosenDistrict}
          setChosenRegion={setChosenRegion}
          setChosenEstateType={setChosenEstateType}
        />
      </main>
    </>
  )
}

export default Sell