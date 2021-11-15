import Input from './fields/Input';
import Select from './fields/Select';


function FormFieldControler({as, ...props}) {
  
  switch(as) {
        case 'input':
            return <Input {...props}/>
        case 'select':
            return <Select {...props}/>
        default: return null
  }
}

export default FormFieldControler;