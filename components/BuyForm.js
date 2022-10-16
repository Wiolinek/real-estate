import Link from 'next/link';
import { generateOptions } from '/helpers/form.helper';
import { URLbuilder } from '/helpers/url.helper';
import { useAppContext } from '../components/GlobalContext';
import { variables } from '/utils/globals';


const FormComp = ({ districtsState, chosenRegion, chosenDistrict, chosenEstateType, setChosenDistrict, setChosenRegion, setChosenEstateType }) => {
    const { regions, estateTypes, labels } = useAppContext();
    
  
  return (
    <form>
        <label>{labels?.form.estateType}
            <select
                name='estateType'
                onChange={e => setChosenEstateType(e.target.selectedOptions[0].value)}
            >
                {generateOptions(variables.defaultValue, estateTypes)}
            </select>
        </label>

        <label>{labels?.form.region}
            <select
                name='region'
                onChange={e => setChosenRegion(e.target.selectedOptions[0].value)}
            >
                {generateOptions(variables.defaultValue, regions)}
            </select>
        </label>

        <label>{labels?.form.district}
            <select
                name='district'
                onChange={e => setChosenDistrict(e.target.selectedOptions[0].value)}
            >
                {generateOptions(variables.defaultValue, districtsState)}
            </select>
        </label>
       
        <Link href={`/buy/${URLbuilder(chosenEstateType, chosenRegion, chosenDistrict)}`}>{labels?.buttons.show || ''}</Link>
    </form>
  );
}

export default FormComp;