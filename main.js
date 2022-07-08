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
    if(num[0] === 0 && num[1] != ".") {
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


//運算符號
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

//按下運算符號後會執行的
function operate() {
    if(operator.length === 1 && num.length === 0){//已輸入第一個數字，只是要修改運算符號
        operator[0] = this.textContent;
        monitor2.textContent = `${num1} ${operator}`;
        console.log(`第一狀況:${operator}`);
    }else if(num1 != 0 && num.length != 0) {//輸入第二個數字後沒按=，而是繼續按別的運算符號
        outcome();
        operator[0] = this.textContent;
        monitor2.textContent = `${num1} ${operator}`;
        console.log(`第二狀況:${operator}`);
    }else {
        if(num1 === 0){//尚未計算時or歸零後or上次計算結果為0
            operator[0] = this.textContent;
            storeClear();
            console.log(`第3-1狀況:${operator}`);
        }else {//按過=後的結果，繼續記錄運算符號
            operator[0] = this.textContent;
            monitor2.textContent = `${num1} ${operator}`;
            console.log(`第3-2狀況:${operator}`);
        }        
        monitor2.textContent = `${num1} ${operator}`;
        
    }
    
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
    if(num.length === 0) {

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
//計算結果(把結果存回num1，其餘東西歸零)
function outcome() {
    if(isNaN(temp) === false) {
        num2 = Number(temp);
        switch(operator[0]) {
            case "+":
                //num2 = parseFloat((num1 + num2).toFixed(5))
                num1 = parseFloat((num1 + num2).toFixed(5))
                console.log(num1);
                console.log(num2);
                reset();
                break;
            case "-":
                num1 = parseFloat((num1 - num2).toFixed(5))
                reset();
                break;
            case "x":
                num1 = parseFloat((num1 * num2).toFixed(5))
                reset();
                break;
            case "/":
                if(num2 === 0) {
                    alert("賣鬧! 數學老師有說過，不能除以0!")
                    clear();
                }else {
                    num1 = parseFloat((num1 / num2).toFixed(5))
                    reset();
                }
                break;
        }
    }
}

//顯示運算結果、清空運算子陣列
function reset() {
    monitor.textContent = num1;
    monitor2.textContent = num1;
    temp = "";
    num = [];
    num2 = 0;
    operator = [];
}

//小數點
let dotCount = 0;
const dot = document.getElementById("dot");
dot.addEventListener("click", addDot);
function addDot() {
    let isDot = false;
    for(let i = 0; i<num.length; i++) {
        if(/\./.test(num[i]) === true) {
            console.log("有.");
            isDot = true;
            break;
        }else {
            
        }
    } 
    if(isDot === false) {
        console.log("沒有.");
        if(num.length === 0) {
            num.push(0);
            num.push(".");
            temp = num.join().replace(/,/g, "");
            monitor.textContent = temp;
        }else {
            num.push(".");
        }
        
    }
    
}