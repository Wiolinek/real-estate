export const listHandler = (array, target) => {

    return array &&
        Array.from(new Set(array?.map(item => item?.[target])))

};