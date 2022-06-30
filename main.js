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
const monitor = document.getElementsByClassName("monitor");
function populate() {
    num.push(Number(this.textContent));
    console.log(num);
    //陣列轉字串+去逗點後，顯示於label
    temp = num.join().replace(/,/g, "");
    console.log(temp);
    monitor[0].textContent = temp;
    //monitor.textContent = toString(num);
    
}

//運算符
const operators = document.getElementsByClassName("operator");
for(let j = 0; j < operators.length; j++) {
    operators[j].addEventListener("click", operate);
}

let operator = "";
//第一個數
let num1;
function storeClear() {
    num1 = Number(temp);
    num = [];
    temp = "";
    monitor[0].textContent = `${num1} ${operator}`;
}
function operate() {
    if(this.textContent === "+") {
        operator = "+";
        storeClear();
    }else if(this.textContent === "-") {
        operator = "-";
        storeClear();
    }else if(this.textContent === "x") {
        operator = "x";
        storeClear();
    }else if(this.textContent === "/") {
        operator = "/";
        storeClear();
    }
}

//清除鍵
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);
function clear() {
    monitor[0].textContent = '0';
    num = [];
    temp = "";
}

