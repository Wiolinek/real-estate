import { Field, ErrorMessage } from 'formik';
import styles from '/styles/Sell.module.sass';


function Select({ label, type, name, options, setDistrictHandler }) {

    return (
        <>
            <label>{label}<br />
                <Field
                    as="select"
                    type={type}
                    name={name}
                    onMouseUp={setDistrictHandler ? e => setDistrictHandler(e) : null}
                >   
                    <option hidden selected value=' ----- '> ----- </option>
                    {options && options.map(option => <option key={option} value={option}>{option}</option>)}
                </Field> 
            </label>
            <ErrorMessage name={name} component="p" className={styles['form-error']}/>
        </>
    );
}

export default Select;