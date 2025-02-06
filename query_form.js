// query form js part

// validate form
function validateForm(){

    // get data
    var name1 = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var selectOption = document.getElementById("select-option").value;
    var msg = document.getElementById("msg").value;
    //console.log("helloooo");
    
   if(name1.length < 1){
    alert("Name can not be empty");
   }

   else if(!isEmailValid(email)){
    alert("Please enter a valid email address..");
   }

   else if(mobile.length < 5){
    alert("Please enter a valid mobile number..");
   }

   else if(selectOption=="Choose a subject"){
    alert("Please choose a subject..")
   }

   else if(msg.length < 1){
    alert("Please enter your message..");
   }

   else{
    document.getElementById("queryForm").style.display = "block";
    document.getElementById("data-form").style.display = "none";
    document.getElementById("finalized-form").style.display = "block";

    document.getElementById("view-name").innerHTML = name1;
    document.getElementById("view-email").innerHTML = email;
    document.getElementById("view-mobile").innerHTML = mobile;
    document.getElementById("view-subject").innerHTML = selectOption;
    document.getElementById("view-msg").innerHTML = msg;

    document.getElementById("email_name").value = name1;
    document.getElementById("email_email").value = email;
    document.getElementById("email_mobile").value = mobile;
    document.getElementById("email_subjects").value = selectOption;
    document.getElementById("email_details").value = msg;
    
   }
}

// functionality of the query when buttons clicked
function manipulateForm(){
    document.getElementById("data-form").style.display = "block";
    document.getElementById("finalized-form").style.display = "none";
}

// to check validity of email
function isEmailValid(email) {
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    return pattern.test(email);
}