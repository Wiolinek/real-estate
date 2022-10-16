import { variables } from '/utils/globals'

export const URLbuilder = (estateType, region, district) => {
    const url = [estateType, region, district ]

    return url
        .filter(Boolean)
        .map(item => item === variables.defaultValue ? variables.defaultValueUrlText : item)
        .join('/')
};