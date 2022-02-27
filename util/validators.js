module.exports.validateRegisterInput = (
    username, 
    email,
    password
)=>{
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'Username must not be empty';
    }
    if(email.trim() === ''){
        errors.username = 'Username must not be empty';
    }
    else{
        const regEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        if(!email.match(regEx)){
            errors.email = 'Email must be a valid email address';
        }
    }
    if(password.trim() === ''){
        errors.password = 'Password must not be empty'
    }else{
        const regExPassword = /^[a-zA-Z0-9~_&*%@$]+$/;
        if(!password.match(regExPassword)){
            errors.password = 'Password must contain 6 characters and only contain upper or lower alphabets and 0-9 number or # or $ &';

        }
    }
    return {
        errors, 
        valid: Object.keys(errors).length < 1
    }
    
}
module.exports.validateLoginInput = (username, password) =>{
    const errors = {};
    if(username.trim() === ''){
        errors.username = 'Username must not be empty';
    }
    if(password.trim() === ''){
        errors.username = 'Password must not be empty';
    } 
    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}
