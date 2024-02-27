const input = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
const resultWord = document.querySelector('.result-word');
const resultTxt = document.querySelector('.result-text');


function checkPalindrome(input){
    pattern = /[^a-zA-Z0-9]/g;
    inputArr = [];
    for(let i = 0; i < input.length ; i++) {
        if(input[i] !== patern) {
            inputArr.push(input[i]);
        }
    return inputArr;    
    }
}
console.log(checkPalindrome());

checkBtn.addEventListener('click', checkPalindrome);