const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
const resultWord = document.querySelector('.result-word');
const resultTxt = document.querySelector('.result-text');
const input = document.getElementById('text-input').value;

checkBtn.addEventListener('click', checkPalindrome);



function inputFiltered() {
    const input = document.getElementById('text-input').value;
    console.log("Input value:", input.length); // Log the input value
    const pattern = /[^a-zA-Z0-9]/g;
    const inputArr = [];
    for(let i = 0; i < input.length ; i++) {
        if(!pattern.test(input[i])) {
            inputArr.push(input[i]);
        }  
    }
    const inputString = inputArr.join('').replace(/%/g,'');
    const inputString2 = inputString.replace(/\s/g, "");
    console.log("Filtered output:", inputString2); // Log the filtered output
    return inputString;
}

function reverseInputFiltered() {
    const input = document.getElementById('text-input').value;
    console.log("Input value:", input.length); // Log the input value
    const pattern = /[^a-zA-Z0-9]/g;
    const reveredInputArr = [];
    for(let i = 0; i < input.length ; i++) {
        if(!pattern.test(input[i])) {
            reveredInputArr.push(input[i]);
        }   
    }
    reveredInputArr.reverse();  
    const inputStringReversed = reveredInputArr.join('').replace(/%/g,'');
    const inputStringRevered2 = inputStringReversed.replace(/\s/g, "");
    console.log("Filtered output:", inputStringRevered2); // Log the filtered output
    return inputStringRevered2; 
}


function checkPalindrome() {
    normalString = inputFiltered();
    reverseString = reverseInputFiltered();

    if(normalString !== reverseString) {
        console.log("false");
        return false;
    }
    else{
        console.log('true');
        return true;
    }
}