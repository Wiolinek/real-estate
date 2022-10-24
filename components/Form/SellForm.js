import { Formik, Form } from 'formik'
import { useRouter } from 'next/router'
import * as Yup from 'yup'
import FormFieldControler from './FormFieldControler'
import { useAppContext } from '/components/GlobalContext'
import { listHandler } from '/helpers/list.helper'


const FormComp = ({ districtsState, sendToDB, setChosenDistrict, setChosenRegion, setChosenEstateType }) => {
    const { regions, estateTypes, labels } = useAppContext()
    const router = useRouter()

    const initialValues = {
        estateType: '',
        region: '',
        district: '',
        name: '',
        phone: '',
        email: '',
    }

    const validationSchema = Yup.object({
        estateType: Yup.string()
            .required(labels?.formErrors.estateType),
        region: Yup.string()
            .required(labels?.formErrors.region),
        district: Yup.string()
            .required(labels?.formErrors.district),
        name: Yup.string()
            .required(labels?.formErrors.name)
            .min(2, labels?.formErrors.nameLenght)
            .matches(/^[a-zA-Z]+[ ][a-zA-Z]+/, labels?.formErrors.nameMatch),
        phone: Yup.string()
            .required(labels?.formErrors.phone)
            .min(13, labels?.formErrors.phoneLenght)
            .max(13, labels?.formErrors.phoneLenghtMax)
            .matches(/^(\+420)[0-9]/, labels?.formErrors.phoneStart)
            .typeError(labels?.formErrors.phoneType || ''),
        email: Yup.string()
            .required(labels?.formErrors.email)
            .min(5, labels?.formErrors.emailLength)
            .email(labels?.formErrors.emailValid)
            .matches(/^[^@]+@[^@]+\.[^@]+$/, labels?.formErrors.emailMatch)
    })

    const onSubmit = async (values) => {     
        await fetch(`http://localhost:3000/api/client`,
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ values })
    })
    .then(res => res.json())
    .then(() => router.push('/sell/form-confirmation'))
    .catch(err => console.error(err))
    }
  
  return (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}

    >
        {formik => (
            <Form>
                <FormFieldControler
                    label={labels?.form.estateType}
                    as='select'
                    type='select'
                    name='estateType'
                    options={estateTypes}
                    changeHandler={e => {
                        setChosenEstateType(e.target.selectedOptions[0].value)
                        formik.handleChange(e)
                    }}
                />
                <FormFieldControler
                    label={labels?.form.region}
                    as='select'
                    type='select'
                    name='region'
                    options={listHandler(regions, 'region')}
                    changeHandler={e => {
                        setChosenRegion(e.target.selectedOptions[0].value)
                        formik.handleChange(e)
                    }}
                />
                <FormFieldControler
                    label={labels?.form.district}
                    as='select'
                    type='select'
                    name='district'
                    options={districtsState}
                    changeHandler={e => {
                        setChosenDistrict(e.target.selectedOptions[0].value);
                        formik.handleChange(e)
                    }}
                />
                <FormFieldControler
                    label={labels?.form.nameSurname}
                    as='input'
                    type='text'
                    name='name'
                />
                <FormFieldControler
                    label={labels?.form.phone}
                    as='input'
                    type='tel'
                    name='phone'
                />
                <FormFieldControler
                    label={labels?.form.email}
                    as='input'
                    type='email'
                    name='email'
                />
                <button type='submit' disabled={formik.isSubmitting}>{labels?.buttons.send || ''}</button>
            </Form>
        )}   
    </Formik>
  );
}

export default FormComp