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
    if(num[0] === 0) {
        num[0] = Number(this.textContent);
        temp = num.join().replace(/,/g, "");
        monitor.textContent = temp;
    }else {
        addNumber(this);
    }  
}

//紀錄數字
function addNumber(nowNum) {
    num.push(Number(nowNum.textContent));
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
let num1 = 0;
let count = 0;
//把現有數值紀錄後清除
function storeClear() {
    num1 = Number(temp);
    num = [];
    temp = "";
    monitor.textContent = "0";
    count ++;
}

//用來儲存目前的運算子
function operate() {
    operator[0] = this.textContent;
    monitor2.textContent = `${temp} ${operator}`;
    storeClear();
    console.log(operator);
}

//清除鍵
const clearBtn = document.getElementById("clear");
clearBtn.addEventListener("click", clear);
function clear() {
    monitor.textContent = '0';
    num = [];
    temp = "";
    num1 = 0;
    operator = [];
    count = 0;
    monitor2.textContent = "";
}

//倒退鍵
const backSpace = document.getElementById("backspace");
backSpace.addEventListener("click", back);
function back() {
    console.log(num);
    if(num[0] === 0 && operator.length ===0) {

    }else {
        if(num.length === 1) {
            num[0] = 0;
            temp = num.join().replace(/,/g, "");
            monitor.textContent = temp;
        }else {
            num.splice(num.length - 1, 1);
            console.log(num);
            temp = num.join().replace(/,/g, "");
            console.log(temp);
            monitor.textContent = temp;
        }
        
    }
    
}

//儲存第二個數
let num2 = 0;
//儲存計算結果
let num3;

//等於鍵
let equal = document.getElementById("equal");
equal.addEventListener("click", outcome);
//計算結果
function outcome() {
    /*
    console.log(`operator: ${operator}`);
    console.log(`num2: ${num2}`);
    */
    if(isNaN(temp) === false) {
        num2 = Number(temp);
        switch(operator[0]) {
            case "+":
                num3 = parseFloat((num1 + num2).toFixed(5)) 
                monitor.textContent = `${num3}`
                allClear()
                break;
            case "-":
                num3 = parseFloat((num1 - num2).toFixed(5)) 
                monitor.textContent = `${num3}`
                allClear()
                break;
            case "x":
                num3 = parseFloat((num1 * num2).toFixed(5)) 
                monitor.textContent = `${num3}`
                allClear()
                break;
            case "/":
                num3 = parseFloat((num1 / num2).toFixed(5)) 
                monitor.textContent = `${num3}`
                allClear()
                break;
        }
    }
}

//歸零
function allClear() {
    num = [];
    temp = "";
    num1 = 0;
    num2 = 0;
    operator = [];
    count = 0;
    monitor2.textContent = "";
}