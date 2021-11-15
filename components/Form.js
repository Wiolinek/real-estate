import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import FormFieldControler from './FormFieldControler';


function FormComp({ estateTypes, regionsState, districtsState, setDistrictHandler }) {

    const initialValues = {
        estateType: '',
        region: '',
        district: '',
        name: '',
        phone: '',
        email: '',
    };

    const validationSchema = Yup.object({
        estateType: Yup.string().required('Estate type is required'),
        region: Yup.string().required('Region is required'),
        district: Yup.string().required('District is required'),
        name: Yup.string().required('Name is required')
            .min(2, "Name should have at least 2 letters"),
        phone: Yup.string()
            .required('Phone is required')
            .min(12, "Phone number should have at least 12 numbers and starts with +420")
            .matches(/^(\+420)[0-9]/, "Phone number should start with +420"),
        email: Yup.string()
            .required("Email address is required")
            .min(5, "Email address should have at least 5 letters")
            .email("Email must be a valid email address")
            .matches(/^[^@]+@[^@]+\.[^@]+$/, "Email address should include '@'")
    });

    const onSubmit = (values, onSubmitProps) => {
        console.log(values);
        onSubmitProps.setSubmitting(false); /* in real life we need to wait for API response and then run this function*/
        onSubmitProps.resetForm();
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });
  
  
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {formik => (
            <Form>
                <FormFieldControler label="Typ nemovitosti:" as="select" type="select" name="estateType" options={estateTypes}/>
                <FormFieldControler label="Kraj ve kterém se nemovitost nachází:" as="select" type="select" name="region" options={regionsState} setDistrictHandler={setDistrictHandler}/>
                <FormFieldControler label="Okres ve kterém se nemovitost nachází:" as="select" type="select" name="district" options={districtsState}/>
                <FormFieldControler label="Name:" as="input" type="text" name="name"/>
                <FormFieldControler label="Telefoní číslo:" as="input" type="tel" name="phone"/>
                <FormFieldControler label="Email:" as="input" type="email" name="email"/>
                <button type="submit" disabled={formik.isSubmitting}>Posli</button>
            </Form>
        )}   
    </Formik>
  );
}

export default FormComp;