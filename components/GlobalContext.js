import React, { createContext, useContext, useEffect, useState } from 'react'
import { listHandler } from '/helpers/list.helper'


const GlobalContext = createContext({})

export const Context = ({ children }) => {
    const [regions, setRegions] = useState()
    const [labels, setLabels] = useState()

    const fetchData = async () => {
        const query = `
            query {
                offerCollection {
                    items {
                        region
                        district
                        type
                    }
                }
                labelsCollection {
                    items {
                        labels
                    }
                }
            }`

        await fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CF_SPACE_ID}?access_token=${process.env.CF_DELIVERY_ACCESS_TOKEN}`,
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ query })
    })
    .then(res => res.json())
    .then(res => {
        setLabels(res.data.labelsCollection.items[0].labels);
        setRegions(res.data.offerCollection.items);
    })
    .catch(err => console.error(err))
    }

    useEffect(() => { 
        fetchData();
    }, [])

    const estateTypesList = listHandler(regions, 'type')

    const providedValues = {
        regions,
        estateTypes: estateTypesList,
        labels
    }


  return (
    <GlobalContext.Provider value={providedValues} >
      {children}
    </GlobalContext.Provider>
  )
}

export const useAppContext = () => {
    return useContext(GlobalContext);
}