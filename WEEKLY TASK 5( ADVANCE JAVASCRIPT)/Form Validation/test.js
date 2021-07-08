const   fName = document.getElementById('fName');
const   lName = document.getElementById('lName');
const   userName = document.getElementById('userName');
const   emails = document.getElementById('email');
const   password = document.getElementById('password');
const   confirmPassword = document.getElementById('confirmPassword');

const   submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', formValidation)

function formValidation() {

        passwordCheck();
        
}

function passwordCheck() {
                
    if (password.value !== confirmPassword.value) {
        alert("password does not match")
        return false;
    }else {
        alert('successful')
    }
}



    
        
   
  


