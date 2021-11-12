import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '/styles/Sell.module.css';


function FormField({ label, as, type, name, options }) {

    return (
        <>
            <label>{label}<br />
                <Field
                    as={as}
                    type={type}
                    name={name}
                >   
                    {/* {options && <option hidden disabled selected value={value === '' ? value : ' ----- '}> ----- </option>} */}
                    {options && options.map(option => <option key={option} value={option}>{option}</option>)}
                </Field> 
            </label>
            <ErrorMessage name={name} component="p" className={styles['form-error']}/>
        </>
    );
}

export default FormField;