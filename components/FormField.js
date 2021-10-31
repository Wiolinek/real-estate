import { Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 


function FormField({label, as, type, name, options, value}) {


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
            <ErrorMessage name={name} component="p" className="form-error"/>
        </>
    );
}

export default FormField;