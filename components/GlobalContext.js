import React, { createContext, useContext, useEffect, useState } from 'react';
import { listHandler } from '/helpers/context.helper';


const GlobalContext = createContext({})

export const Context = ({ children }) => {
    const [regions, setRegions] = useState();
    const [labels, setLabels] = useState();

    async function fetchData() {
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
        }
    `;
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

    const regionsList = listHandler(regions, 'region')
    const districtsList = listHandler(regions, 'district')
    // .map(district => { return { district: district.district, region: district.region } })
    const estateTypesList = listHandler(regions, 'type')

    const providedValues = {
        regions: regionsList,
        districts: districtsList,
        estateTypes: estateTypesList,
        labels
    }


  return (
    <GlobalContext.Provider value={providedValues} >
      {children}
    </GlobalContext.Provider>
  )
};

export const useAppContext = () => {
    return useContext(GlobalContext);
};