const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
const resultWord = document.querySelector('.result-word');
const resultTxt = document.querySelector('.result-text');
const input = document.getElementById('text-input').value;

function checkPalindrome() {
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

checkBtn.addEventListener('click', checkPalindrome);
