import Input from './formFields/Input'
import Select from './formFields/Select'


const FormFieldControler = ({as, ...props}) => {
  
  switch(as) {
    case 'input':
        return <Input {...props}/>
    case 'select':
        return <Select {...props}/>
    default: return null
  }
}

export default FormFieldControler