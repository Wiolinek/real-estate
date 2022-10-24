import { Field, ErrorMessage } from 'formik'

import styles from '/styles/Form.module.sass'


const Input = ({ label, type, name }) => {
  
    return (
        <>
            <label>{label}<br />
                <Field
                    type={type}
                    name={name}
                >   
                </Field> 
                <ErrorMessage name={name} component='p' className={styles['form-error']}/>
            </label>
            
        </>
    );
  }
  
  export default Input