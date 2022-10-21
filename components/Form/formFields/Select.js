import { Field, ErrorMessage } from 'formik';
import { generateOptions } from '/helpers/form.helper';
import { variables } from '/utils/globals';

import styles from '/styles/Form.module.sass';


const Select = ({ label, type, name, options, changeHandler }) => {

    return (
        <>
            <label>{label}<br />
                <Field
                    as='select'
                    type={type}
                    name={name}
                    onChange={changeHandler}
                >   
                    {generateOptions(variables.defaultValue, options)}
                </Field>
            <ErrorMessage name={name} component='p' className={styles['form-error']}/>
            </label>
        </>
    );
}

export default Select;