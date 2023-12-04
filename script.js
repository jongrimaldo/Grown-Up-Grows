function validateForm() {
    alert("Thank you for your support! We will nofity you about upcoming news!");
    var emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(document.forms[0].email.value == "") {
        alert("Email field cannot be empty!");
        return false;
    } else if(!emailPattern.test(document.forms[0].email.value)) {
        alert("Email invalid. Ex: example@mail.com");
        return false;
    }   
    
    alert("Submission successful!!");
    return true;
}