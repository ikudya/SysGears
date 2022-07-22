var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;



input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

option_from = inputType.value;
option_to   = resultType.value;


function myResult(){

    result.value = input.value;
    option_from = inputType.value;
    option_to = resultType.value;

    if(option_from === "millimetre" && option_to==="millimetre"){
        result.value = input.value;
    }else if(option_from === "millimetre" && option_to==="centimetre"){
        result.value = Number(input.value) / 10;
    }else if(option_from === "millimetre" && option_to==="meter"){
        result.value = Number(input.value) / 1000;
    }else if(option_from === "millimetre" && option_to==="kilometer"){
        result.value = Number(input.value) / 1000000;
    }else if(option_from === "millimetre" && option_to==="foot"){
        result.value = Number(input.value) / 304,8;
    }else if(option_from === "millimetre" && option_to==="inches"){
        result.value = Number(input.value) / 25,4;
    }else if(option_from === "millimetre" && option_to==="yard"){
        result.value = Number(input.value) / 914,4;
    }

    if(option_from === "centimetre" && option_to==="centimetre"){
        result.value = input.value;
    }else if(option_from === "centimetre" && option_to==="millimetre"){
        result.value = Number(input.value) * 10;
    }else if(option_from === "centimetre" && option_to==="meter"){
        result.value = Number(input.value) / 100;
    }else if(option_from === "centimetre" && option_to==="kilometer"){
        result.value = Number(input.value) / 100000;
    }else if(option_from === "centimetre" && option_to==="foot"){
        result.value = Number(input.value) / 30,48;
    }else if(option_from === "centimetre" && option_to==="inches"){
        result.value = Number(input.value) / 2,54;
    }else if(option_from === "centimetre" && option_to==="yard"){
        result.value = Number(input.value) / 91,44;
    }


    if(option_from === "meter" && option_to==="meter"){
        result.value = input.value;
    }else if(option_from === "meter" && option_to==="millimetre"){
        result.value = Number(input.value) * 1000;
    }else if(option_from === "meter" && option_to==="centimetre"){
        result.value = Number(input.value) * 100;
    }else if(option_from === "meter" && option_to==="kilometer"){
        result.value = Number(input.value) / 100;
    }else if(option_from === "meter" && option_to==="foot"){
        result.value = Number(input.value) * 3,281;
    }else if(option_from === "meter" && option_to==="inches"){
        result.value = Number(input.value) * 39,37;
    }else if(option_from === "meter" && option_to==="yard"){
        result.value = Number(input.value) * 1.094 ;
    }

    if(option_from === "kilometer" && option_to==="kilometer"){
        result.value = input.value;
    }else if(option_from === "kilometer" && option_to==="millimetre"){
        result.value = Number(input.value) * 1000000;
    }else if(option_from === "kilometer" && option_to==="centimetre"){
        result.value = Number(input.value) * 100000;
    }else if(option_from === "kilometer" && option_to==="meter"){
        result.value = Number(input.value) * 1000;
    }else if(option_from === "kilometer" && option_to==="foot"){
        result.value = Number(input.value) * 3281;
    }else if(option_from === "kilometer" && option_to==="inches"){
        result.value = Number(input.value) * 39370;
    }else if(option_from === "kilometer" && option_to==="yard"){
        result.value = Number(input.value) * 1094;
    }

    if(option_from === "foot" && option_to==="foot"){
        result.value = input.value;
    }else if(option_from === "foot" && option_to==="millimetre"){
        result.value = Number(input.value) * 304,8;
    }else if(option_from === "foot" && option_to==="centimetre"){
        result.value = Number(input.value) * 30,48;
    }else if(option_from === "foot" && option_to==="meter"){
        result.value = Number(input.value) / 3,281;
    }else if(option_from === "foot" && option_to==="kilometer"){
        result.value = Number(input.value) / 3281;
    }else if(option_from === "foot" && option_to==="inches"){
        result.value = Number(input.value) * 12;
    }else if(option_from === "foot" && option_to==="yard"){
        result.value = Number(input.value) / 3;
    }

    if(option_from === "inches" && option_to==="inches"){
        result.value = input.value;
    }else if(option_from === "inches" && option_to==="millimetre"){
        result.value = Number(input.value) * 25,4;
    }else if(option_from === "inches" && option_to==="centimetre"){
        result.value = Number(input.value) * 2,54;
    }else if(option_from === "inches" && option_to==="meter"){
        result.value = Number(input.value) / 39,37;
    }else if(option_from === "inches" && option_to==="kilometer"){
        result.value = Number(input.value) / 39370;
    }else if(option_from === "inches" && option_to==="foot"){
        result.value = Number(input.value) / 12;
    }else if(option_from === "inches" && option_to==="yard"){
        result.value = Number(input.value) / 36;
    }

    if(option_from === "yard" && option_to==="yard"){
        result.value = input.value;
    }else if(option_from === "yard" && option_to==="millimetre"){
        result.value = Number(input.value) * 914,4;
    }else if(option_from === "yard" && option_to==="centimetre"){
        result.value = Number(input.value) * 91,44;
    }else if(option_from === "yard" && option_to==="meter"){
        result.value = Number(input.value) / 1.094;
    }else if(option_from === "yard" && option_to==="kilometer"){
        result.value = Number(input.value) / 1094;
    }else if(option_from === "yard" && option_to==="foot"){
        result.value = Number(input.value) * 3;
    }else if(option_from === "yard" && option_to==="inches"){
        result.value = Number(input.value) * 36;
    }
}
