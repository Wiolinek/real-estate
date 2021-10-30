import { ErrorMessage, Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup'; 


function FormComp({ regionsState, districtsState, setDistrictHandler }) {

    const initialValues = {
        estateType: '',
        region: '',
        district: '',
        name: '',
        phone: '',
        email: '',
    };

    const onSubmit = values => {
        console.log(values)
    };

    // const validate = values => {
    //     let errors = {};

    //     if(!formik.values.estateType) {
    //         formik.errors.estateType = 'This field is required'
    //     } else {
    //         formik.errors.estateType = ''
    //     }

    //     if(formik.values.region === '') {
    //         formik.errors.region = 'This field is required'
    //     } else {
    //         formik.errors.region = ''
    //     }

    //     if(formik.values.district === '') {
    //         formik.errors.district = 'This field is required'
    //     } else {
    //         formik.errors.district = ''
    //     }

    //     if(formik.values.name === '') {
    //         formik.errors.name = 'This field is required'
    //     } else {
    //         formik.errors.name = ''
    //     }

    //     if(formik.values.phone === '') {
    //         formik.errors.phone = 'This field is required'
    //     } else {
    //         formik.errors.phone = ''
    //     }

    //     if(formik.values.email === '') {
    //         formik.errors.email = 'This field is required'
    //     }
    //     else if('regex') {
    //         formik.errors.email = 'Invalid email format'
    //     } else {
    //         formik.errors.email = ''
    //     }
    // };

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

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        // validate,
    });

  
  return (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
        {/* <form onSubmit={formik.handleSubmit}> */}
        <Form>
            <label>Typ nemovitosti:<br />
                <Field
                    as="select"
                    type="select"
                    name="estateType"
                    // {...formik.getFieldProps("estateType")}
                    // value={formik.values.estateType}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                >
                    <option hidden disabled selected value={formik.values.estateType === '' ? formik.values.estateType : ' ----- '}> ----- </option>
                    <option value="byt">Byt</option>
                    <option value="dum">Dům</option>
                    <option value="pozemek">Pozemek</option>
                </Field>
            </label>
            {/* {formik.touched.estateType && formik.errors.estateType ? <p className="form-error">{formik.errors.estateType}</p> : null} */}
            <ErrorMessage name="estateType" component="p" className="form-error"/>
            <label>Kraj ve kterém se nemovitost nachází:<br />
                <Field
                    as="select"
                    type="select"
                    name="region"
                    // {...formik.getFieldProps("region")}
                    // value={formik.values.region}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    onMouseUp={e => setDistrictHandler(e)}
                >
                    <option hidden disabled selected value={formik.values.region === '' ? formik.values.region : ' ----- '}> ----- </option> 
                    {regionsState && regionsState.map(option => <option key={option} value={option}>{option}</option>)}
                </Field>
            </label>
            {/* {formik.touched.region && formik.errors.region ? <p className="form-error">{formik.errors.region}</p> : null} */}
            <ErrorMessage name="region" component="p" className="form-error"/>
            <label>Okres ve kterém se nemovitost nachází:<br />
                <Field
                    as="select"
                    type="select"
                    name="district"
                    // {...formik.getFieldProps("district")}
                    // value={formik.values.district}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                >
                    <option hidden disabled selected value={formik.values.district === '' ? formik.values.district : ' ----- '}> ----- </option>
                    {districtsState && districtsState.map(option => <option key={option.district} value={option.district}>{option.district}</option>)}
                </Field>
            </label>
            {/* {formik.touched.district && formik.errors.district ? <p className="form-error">{formik.errors.district}</p> : null} */}
            <ErrorMessage name="district" component="p" className="form-error"/>
            <label>Jmeno:<br />
                {/* <input */}
                <Field
                    type="text"
                    name="name"
                    // {...formik.getFieldProps("name")} WE DO NOT NEED THIS WHEN WE USE FIELD COMPONENT
                    // value={formik.values.name}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                />
            </label>
            {/* {formik.touched.name && formik.errors.name ? <p className="form-error">{formik.errors.name}</p> : null} */}
            <ErrorMessage name="name" component="p" className="form-error"/>
            <label>Telefoní číslo:<br />
                {/* <input */}
                <Field
                    type="tel"
                    name="phone"
                    // {...formik.getFieldProps("phone")} WE DO NOT NEED THIS WHEN WE USE FIELD COMPONENT
                    // value={formik.values.phone}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                />
            </label>
            {/* {formik.touched.phone && formik.errors.phone ? <p className="form-error">{formik.errors.phone}</p> : null} */}
            <ErrorMessage name="phone" component="p" className="form-error"/>
            <label>Email:<br />
                {/* <input */}
                <Field
                    type="email"
                    name="email"
                    // {...formik.getFieldProps("email")} WE DO NOT NEED THIS WHEN WE USE FIELD COMPONENT
                    // value={formik.values.email}
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                />
            </label>
            {/* {formik.touched.email && formik.errors.email ? <p className="form-error">{formik.errors.email}</p> : null} */}
            <ErrorMessage name="email" component="p" className="form-error"/>
            <button type="submit">Posli</button>
        </Form>
    </Formik>
  );
}

export default FormComp;