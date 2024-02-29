const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const input = document.getElementById('text-input').value;
checkBtn.addEventListener('click', checkPalindrome);



function inputFiltered() {
    console.log("Input value:", input); // Log the input value
    const pattern = /[^a-zA-Z0-9]/g;
    const inputArr = [];
    for(let i = 0; i < input.length; i++) {
        if(!pattern.test(input[i])) {
            inputArr.push(input[i]);
        }  
    }
    const inputString = inputArr.join('').replace(/[!@#$%^&*()_+=' ']/g, '');
    console.log("Filtered output:", inputString); // Log the filtered output
    return inputString;
}


function reverseInputFiltered() {
    console.log("Input value:", input.length); // Log the input value
    const pattern = /[^a-zA-Z0-9]/g;
    const reveredInputArr = [];
    for(let i = 0; i < input.length ; i++) {
        if(!pattern.test(input[i])) {
            reveredInputArr.push(input[i]);
        }   
    }
    reveredInputArr.reverse();  
    const inputStringReversed = reveredInputArr.join('').replace(/[!@#$%^&*()_+=' ']/g, '');
    console.log("Filtered output:", inputStringReversed); // Log the filtered output
    return inputStringReversed; 
}




function displayResult() {
    const resultWord = document.querySelector('.result-word');
    const resultTxt = document.querySelector('.result-text');
    resultWord.innerText = input;
    if(checkPalindrome()) {
        return resultTxt = " is a palindrome."
    } else {
        return resultTxt = " is not a palindrome."
    }
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
    displayResult();
}