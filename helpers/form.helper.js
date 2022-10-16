export const districtHandler = (chosenRegion, regions) => {

    return Array.isArray(regions) && 
        regions?.filter(region => region?.region === chosenRegion && region.district).map(region => region.district)
};


export const generateOptions = (defaultValue, optionsArr) => {

    return (
        <>
            <option hidden selected value={defaultValue}>{defaultValue}</option>
            {Array.isArray(optionsArr) && optionsArr.map(option =>
                <option key={option} value={option}>
                    {option}
                </option>
            )}
        </>
    )
};