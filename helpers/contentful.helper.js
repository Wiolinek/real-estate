import { variables } from '/utils/globals'

export const getData = (estate, region, district, offerId) => {

    const contentful = require('contentful')

    const client = contentful.createClient({
        space: process.env.CF_SPACE_ID,
        environment: 'master',
        accessToken: process.env.CF_DELIVERY_ACCESS_TOKEN,
    })

    const query = {
        content_type: 'offer',
        ...(estate !== variables.defaultValueUrlText && {'fields.type': estate?.toLowerCase()}),
        ...(region !== variables.defaultValueUrlText && {'fields.region': region}),
        ...(district !== variables.defaultValueUrlText && {'fields.district': district}),
        ...(offerId && {'sys.id': offerId}),
    }

    const offers = client.getEntries(query)

    return offers
}