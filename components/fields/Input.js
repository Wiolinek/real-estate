import { Field, ErrorMessage } from 'formik';
import styles from '/styles/Sell.module.sass';


function Input({ label, type, name }) {
  
    return (
        <>
            <label>{label}<br />
                <Field
                    type={type}
                    name={name}
                >   
                </Field> 
            </label>
            <ErrorMessage name={name} component="p" className={styles['form-error']}/>
        </>
    );
  }
  
  export default Input;