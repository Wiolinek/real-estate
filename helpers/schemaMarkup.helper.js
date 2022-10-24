export const descriptionHandler = (item) => {

    return item?.description?.content?.map(item => item.content.map(text => text?.value)).flat().toString();
}


export const schemaMarkupHandler = (type, data) => {

    switch (type) {

        case 'organization':

            return `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Real Estate",
                "url": "https://real-estate-2e8xgjdt2-wiolinek.vercel.app/",
            }`
            break;

        case 'product':

            return `{
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "${data?.type} in ${data?.district} for sale",
                "description": "${data?.description}",
                "image": "${data?.image?.[0]?.fields?.file?.url}"
            }`
            break;
        
        default: null
    }
}