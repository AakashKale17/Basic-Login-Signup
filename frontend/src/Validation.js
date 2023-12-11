function Validation(values) {
    let error = {}
    const email_pattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if(values.username === "") {
        error.username = "Field should not be empty"
    }
    else {
        error.username = ""
    }


    if(values.email === "") {
        error.email = "Field should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Enter valid email"
    }
    else {
        error.email = ""
    }

    if(values.password === "") {
        error.password = "Field should not be empty"
    }
    else if(!password_pattern.test(values.password)) {
        error.password = "Enter valid password" 
    }
    else {
        error.password = ""
    }
    return error;
}

export default Validation;