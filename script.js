const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
const resultWord = document.querySelector('.result-word');
const resultTxt = document.querySelector('.result-text');
const input = document.getElementById('text-input').value;


    


checkBtn.addEventListener('click', InputToArr);


/* function InputToArr() {
    const input = document.getElementById('text-input').value;
    const pattern = /[^a-zA-Z0-9]/g;
    const inputArr = [];
    for(let i = 0; i < input.length ; i++) {
        if(!pattern.test(input[i])) {
            inputArr.push(input[i]);
        }  
    }
    const inputString = inputArr.join('');
    console.log(inputString);
    return inputString
}
 */

function InputToArr() {
    const input = document.getElementById('text-input').value;
    console.log("Input value:", input); // Log the input value
    const pattern = /[^a-zA-Z0-9]/g;
    const inputArr = [];
    for(let i = 0; i < input.length ; i++) {
        if(!pattern.test(input[i])) {
            inputArr.push(input[i]);
        }  
    }
    const inputString = inputArr.join('').replace('%','');
    console.log("Filtered output:", inputString); // Log the filtered output
    return inputString;
}



function reverseString() {
    

}






/* function checkPalindrome() {
    const input = document.getElementById('text-input').value;
    const pattern = /[^a-zA-Z0-9]/g;
    const inputArr = [];
    for(let i = 0; i < input.length ; i++) {
        if(!pattern.test(input[i])) {
            inputArr.push(input[i]);
        }  
    }
    console.log(inputArr);
    return inputArr;  
}

checkBtn.addEventListener('click', checkPalindrome); */