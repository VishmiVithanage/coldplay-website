function validateForm(){
    var fnameError = document.getElementById("fname").value;
    var lnameError = document.getElementById("lname").value;
    var emailError = document.getElementById("email");

    // Shows an error message if the First name is empty
    if(fnameError.length == 0){
        alert("First name can not be empty");
    }
    
    // Shows an error message if the Last name is empty
    else if(lnameError.length == 0){
        alert("Last name can not be empty");
    }
    
    // Shows an error message if the email is empty or invalid
    else if(!isEmailValid(email)){
        alert("Please enter a valid email address");
    }

}

//Check email validity
function isEmailValid(email) {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    return pattern.test(email);
}