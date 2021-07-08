
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

