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

//按下數字鍵要執行的
let num = [];
const monitor = document.getElementsByClassName("monitor");
function populate() {
    num.push(Number(this.textContent));
    console.log(num);
    //陣列轉字串+去逗點後，顯示於label
    let temp = num.join().replace(/,/g, "");
    console.log(temp);
    monitor[0].textContent = temp;
    //monitor.textContent = toString(num);
    
}

const digit = document.getElementsByClassName("digit");
for(let i=0; i<digit.length; i++) {
    digit[i].addEventListener('click', populate);
}

