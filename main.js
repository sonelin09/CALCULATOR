function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b) {
    return add(a, b);
}

//數字鍵
const digit = document.getElementsByClassName("digit");
for(let i=0; i<digit.length; i++) {
    digit[i].addEventListener("click", populate);
}

//按下數字鍵要執行的
let num = [];
let temp;
const monitor = document.getElementById("monitor1");
function populate() {
    num.push(Number(this.textContent));
    console.log(num);
    //陣列轉字串+去逗點後，顯示於label
    temp = num.join().replace(/,/g, "");
    console.log(temp);
    monitor.textContent = temp;
    //monitor.textContent = toString(num);
    
}

//運算符
const operators = document.getElementsByClassName("operator");
for(let j = 0; j < operators.length; j++) {
    operators[j].addEventListener("click", operate);
}

let operator = [];
let numWithOperator = [];
//第一個數
let num1;
//把現有數值紀錄後清除
function storeClear() {
    num1 = Number(temp);
    num = [];
    temp = "";
    monitor.textContent = `${num1} ${operator}`;
}
function operate() {
    operator.push(this.textContent);
    monitor.textContent = `${temp} ${operator}`;
    console.log(operator);
}

//清除鍵
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);
function clear() {
    monitor.textContent = '0';
    num = [];
    temp = "";
}

//倒退鍵
const backSpace = document.getElementById("backspace");
backSpace.addEventListener("click", back);
function back() {
    num.splice(num.length - 1, 1);
    console.log(num);
    temp = num.join().replace(/,/g, "");
    console.log(temp);
    monitor.textContent = temp;
}

//等於鍵
let equal =document.getElementById("equal");
equal.addEventListener("click", outcome);
/*
function outcome() {
    switch(operator) {
        case "+":
            num2 = num1 + num2
            break;
        case "-":
            num2 = num1 + num2
            break;
    }
}
*/