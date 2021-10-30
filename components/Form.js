import { useFormik } from 'formik';



function Form({ regionsState, districtsState, setDistrictHandler }) {

    const initialValues = {
        estateType: '',
        region: '',
        district: '',
        name: '',
        phone: '',
        email: '',
    }

    const onSubmit = values => {
        // console.log(values)
        console.log(values)
    }

    const validate = values => {
        let errors = {};

        if(!formik.values.estateType) {
            formik.errors.estateType = 'This field is required'
        } else {
            formik.errors.estateType = ''
        }

        if(formik.values.region === '') {
            formik.errors.region = 'This field is required'
        } else {
            formik.errors.region = ''
        }

        if(formik.values.district === '') {
            formik.errors.district = 'This field is required'
        } else {
            formik.errors.district = ''
        }

        if(formik.values.name === '') {
            formik.errors.name = 'This field is required'
        } else {
            formik.errors.name = ''
        }

        if(formik.values.phone === '') {
            formik.errors.phone = 'This field is required'
        } else {
            formik.errors.phone = ''
        }

        if(formik.values.email === '') {
            formik.errors.email = 'This field is required'
        }
        else if('regex') {
            formik.errors.email = 'Invalid email format'
        } else {
            formik.errors.email = ''
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    console.log(formik.touched)

  
  return (
    <form onSubmit={formik.handleSubmit}>
        <label>Typ nemovitosti:<br />
            <select type="select" name="estateType" value={formik.values.estateType} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option hidden disabled selected value={formik.values.estateType === '' ? formik.values.estateType : ' ----- '}> ----- </option>
                <option value="byt">Byt</option>
                <option value="dum">Dům</option>
                <option value="pozemek">Pozemek</option>
            </select>
        </label>
        {formik.touched.estateType && formik.errors.estateType ? <p className="form-error">{formik.errors.estateType}</p> : null}
        <label>Kraj ve kterém se nemovitost nachází:<br />
            <select type="select" name="region" value={formik.values.region} onChange={formik.handleChange} onBlur={formik.handleBlur} onMouseUp={e => setDistrictHandler(e)}>
                <option hidden disabled selected value={formik.values.region === '' ? formik.values.region : ' ----- '}> ----- </option> 
                {regionsState && regionsState.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
        </label>
        {formik.touched.region && formik.errors.region ? <p className="form-error">{formik.errors.region}</p> : null}
        <label>Okres ve kterém se nemovitost nachází:<br />
            <select type="select" name="district" value={formik.values.district} onChange={formik.handleChange} onBlur={formik.handleBlur}>
                <option hidden disabled selected value={formik.values.district === '' ? formik.values.district : ' ----- '}> ----- </option>
                {districtsState && districtsState.map(option => <option key={option.district} value={option.district}>{option.district}</option>)}
            </select>
        </label>
        {formik.touched.district && formik.errors.district ? <p className="form-error">{formik.errors.district}</p> : null}
        <label>Jmeno:<br />
            <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        </label>
        {formik.touched.name && formik.errors.name ? <p className="form-error">{formik.errors.name}</p> : null}
        <label>Telefoní číslo:<br />
            <input type="tel" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        </label>
        {formik.touched.phone && formik.errors.phone ? <p className="form-error">{formik.errors.phone}</p> : null}
        <label>Email:<br />
            <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        </label>
        {formik.touched.email && formik.errors.email ? <p className="form-error">{formik.errors.email}</p> : null}
        <button type="submit">Posli</button>
    </form>
  );
}

export default Form;