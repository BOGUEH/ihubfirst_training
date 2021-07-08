


let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType =   document.getElementById('input-type');
let resultType =   document.getElementById('result-type');

let inputTypeValue, resultTypeValue;


input.addEventListener("keyup", ConverterUpdate);

inputType.addEventListener("change", ConverterUpdate);
resultType.addEventListener("change", ConverterUpdate);


function ConverterUpdate( ) {
   inputTypeValue = inputType.value;
   resutlTypeValue = resultType.value;

  

//converting from meter to  inches, feet and yards

    if (inputTypeValue === "meter" && resutlTypeValue === "inches") {

        result.value = input.value*39.3701;
        
    } 
        else if (inputTypeValue === "meter" && resutlTypeValue === "feet") {

            result.value = input.value*3.28084;

    }
     else if (inputTypeValue === "meter" && resutlTypeValue === "yards") {

        result.value = input.value*1.09361
    }
     else if (inputTypeValue === "meter" && resutlTypeValue === "meter") {

        result.value = input.value
    }

    //converting from inches to  meter, feet and yards


    if (inputTypeValue === "inches" && resutlTypeValue === "meter") {

        result.value = input.value*0.0254;
        
    } 
        else if (inputTypeValue === "inches" && resutlTypeValue === "feet") {

            result.value = input.value*0.0833333 ;

    }
     else if (inputTypeValue === "inches" && resutlTypeValue === "yards") {

        result.value = input.value*0.0277778;
    }
     else if (inputTypeValue === "inches" && resutlTypeValue === "inches") {

        result.value = input.value
    }

    //converting from feet to  meter, inches and yards

    if (inputTypeValue === "feet" && resutlTypeValue === "meter") {

        result.value = input.value*0.3048;
        
    } 
        else if (inputTypeValue === "feet" && resutlTypeValue === "inches") {

            result.value = input.value*12;

    }
     else if (inputTypeValue === "feet" && resutlTypeValue === "yards") {

        result.value = input.value*0.333333
    }
     else if (inputTypeValue === "feet" && resutlTypeValue === "feet") {

        result.value = input.value
    }

//converting from yards to  meter, inches and yards

    if (inputTypeValue === "yards" && resutlTypeValue === "inches") {

        result.value = input.value*36;
        
    } 
        else if (inputTypeValue === "yards" && resutlTypeValue === "feet") {

            result.value = input.value*3;

    }
     else if (inputTypeValue === "yards" && resutlTypeValue === "meter") {

        result.value = input.value*0.9144
    }
     else if (inputTypeValue === "yards" && resutlTypeValue === "yards") {

        result.value = input.value
    }
        
        
   
}







const   fName = document.getElementById('fName');
const   lName = document.getElementById('lName');
const   userName = document.getElementById('userName');
const   emails = document.getElementById('email');
const   password = document.getElementById('password');
const   confirmPassword = document.getElementById('confirmPassword');
const   submitBtn = document.getElementById('submitBtn');


 
submitBtn.addEventListener('click', formValidation)

function formValidation(e) {
    e.preventDefault();
    firstName = fName.value;
    lastName = lName.value;
    email = emails.value;
    

    
    errorChecking()
    emailValidation (email);
    userNameValidation ();
    passwordCheck();
    
    
  
}

        function errorChecking() {

            
            //checking for empty string ( if the field is empty it return and error message)
            if(firstName == ""  || lastName == ""){
                alert('field is empty');
                return false;
            };
            // cheking if the value include a Number. if yes it will return an error message
            if(!isNaN(firstName || lastName)){
                
                alert('field must not contain number');
                return false;
            };

            // cheking if the first name and last name is thesame. if yes it will return an error message
            if (fName.value === lName.value) {
                
                alert("first name and last name cant be the same");
                return false;
            } ;

            //checking for the length of the character to be inputed on the first name and last name input

            if (firstName.length   < 8 ) {
                alert( "character must be more than 8 ");

                return false;
                
            } 
            if(lastName.length > 11){
                alert( "character must not be greater than 12");

                return false;
            };

            if (firstName.length < 8 ) {
                alert( "character must be more than 8 ")
                
            }
             if(lastName.length > 11){
                alert( "character must not be greater than 12");

                return false;
        
            }

            if(password.length<6){  
                alert("Password must be at least 6 characters long.");  
                return false;  
                }   

            

        }

       
            function emailValidation (email) {

                let  emailRegExp =  /\S+@\S+\.\S+/;
                /*the expression above is achieved using regular expression
                the '\s' is to check for space and '@' is to check for that value in the code while the
                '.' is to check for the dot value before the validation can take
                */
                if (emails.value.match(emailRegExp)) {
                    alert( "successful");
                } else { 
                    alert('some text are required')
                }
            
            }

            function userNameValidation () {
                //checking for the length of the text
                let userName1 = userName.value;
                if (userName1.length < 6) {
                    alert("field must be up to 6")
                    return false;
                } else if( userName1.length > 8 ){
                    alert("field must not be up to 8")
                }
            
                   //checking for empty string ( if the field is empty it return and error message)
                   if(userName1 == "" ){
                    alert('field is empty');
                    return false;
                }
            
                let  userRegExp =  /([a-zA-Z0-9][@&^%])/;
                /*the expression above is achieved using regular expression
                it check if the input contain a number or alphabet  and the special characters
                */
                if (userName.value.match(userRegExp)) {
                    alert( "successful");
                } else { 
                    alert('some text are required')
                }
                
            }

           
        

                    function passwordCheck() {
                                    
                        if (password.value !== confirmPassword.value) {
                            alert("password does not match")
                            return false;
                        }else {
                            alert('successful')
                        }
                    }
