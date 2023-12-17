export default function ValidateForm(formData){
    let newErrors={}
    let valid=true;
    if(formData.firstName.trim()===''){
        newErrors={
            ...newErrors,
            firstName:'Enter the first name'
        }
        valid=false;
    }
    
    if(formData.lastName.trim()===''){
        newErrors={
            ...newErrors,
            lastName:'Enter the last name'
        }
        valid=false;
    }
    if(formData.email.trim()==='' || !emailValidator(formData.email.trim())){
        newErrors={
            ...newErrors,
            email:'Enter a valid email'
        }
        valid=false;
    }
    if(formData.address.trim()===''){
        newErrors={
            ...newErrors,
            address:'Enter the address'
        }
        valid=false;
    }
    if(formData.city.trim()===''){
        newErrors={
            ...newErrors,
            city:'Enter the city'
        }
        valid=false;
    }
    if(formData.state.trim()===''){
        newErrors={
            ...newErrors,
            state:'Enter the state'
        }
        valid=false;
    }
    if(formData.pincode.trim()===''  || (isNaN(formData.pincode))){
        newErrors={
            ...newErrors,
            pincode:'Enter a valid pincode'
        }
        valid=false;
    }
    return {
        newErrors,
        valid
    };

}

export function emailValidator(value){
    const  emailRegex = new RegExp('^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$');
    if(emailRegex.test(value)){
        return true;
    }else{
        return false;
    }
}