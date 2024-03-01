const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', checkPalindrome);

function inputFiltered() {
    const input = document.getElementById('text-input').value;
    console.log("Input value:", input);
    const pattern = /[^a-zA-Z0-9]/g;
    const inputArr = [];
    for(let i = 0; i < input.length; i++) {
        if(!pattern.test(input[i])) {
            inputArr.push(input[i]);
        }  
    }
    const inputString = inputArr.join('').replace(/[!@#$%^&*()_+=' ':]/g, '');
    console.log("Filtered output:", inputString); // Log the filtered output
    return inputString.toLowerCase();
}


function reverseInputFiltered() {
    const input = document.getElementById('text-input').value;
    const pattern = /[^a-zA-Z0-9]/g;
    const reveredInputArr = [];
    for(let i = 0; i < input.length ; i++) {
        if(!pattern.test(input[i])) {
            reveredInputArr.push(input[i]);
        }   
    }
    reveredInputArr.reverse();  
    const inputStringReversed = reveredInputArr.join('').replace(/[!@#$%^&*()_+=' ':]/g, '');
    console.log("Filtered output:", inputStringReversed); // Log the filtered output
    return inputStringReversed.toLowerCase(); 
}


function checkPalindrome() {
    const input = document.getElementById('text-input').value;
    let normalString = inputFiltered();
    let reverseString = reverseInputFiltered();
    if(input == '') {
        alert("Please input a value");
        return;
    }
    else if(normalString !== reverseString) {
        console.log("false");
        result.innerHTML = `<strong>${input}</strong> is not a palindrome.`;
        return false;
    }
    else{
        console.log('true');
        result.innerHTML = `<strong>${input}</strong> is a palindrome.`;
        return true;
    }
}