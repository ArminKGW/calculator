const numbers = document.querySelector(".num-op");
const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
let firstNumber = null, secondNumber = null, operator = null, inOperation = false, result, firstTimeSecondNumber = true;

numbers.addEventListener("click", (event) => {
    if(event.target.className.includes("number")){
        if(display.textContent.length < 22) getNumber(event);
    }
    if(event.target.className.includes("operator")){
        if(firstNumber && secondNumber){
            firstTimeSecondNumber = false;
            secondNumber = display.textContent;
            result = operate(firstNumber, secondNumber, operator);
            display.textContent = result;
            firstNumber = display.textContent;
            secondNumber = null;
        }
        operator = getOperator(event);
        inOperation = true;
    }
    if(event.target.className == "do"){
        if(firstNumber && secondNumber){
            secondNumber = display.textContent;
            result = operate(firstNumber, secondNumber, operator);
            display.textContent = result;
            firstNumber = display.textContent;
            secondNumber = null;
        }
    }
});

clear.addEventListener("click", () => {
    display.textContent = '0';
    firstNumber = null;
    secondNumber = null;
    operator = null;
    firstTimeSecondNumber = true;
});

function getOperator(event){
    operator = event.target.textContent; 
    if(firstNumber == null){
        firstNumber = display.textContent;
    }
    else{
        secondNumber = display.textContent;    
    }
    return operator;
}

function getNumber(event){
    let number = event.target.textContent; 
    if(inOperation) {
        display.textContent = '0';
        inOperation = false;
    }
    if(number === '.'){
        if(!(display.textContent.includes('.'))){
            display.textContent += number;
        }
    }
    else if(display.textContent != '0'){
        display.textContent += number;
    }
    else display.textContent = number;
    if(firstTimeSecondNumber){
        secondNumber = display.textContent;
    }
}


function add(a, b){
    return +a + +b;
}

function subtract(a, b){
    return +a - +b;
}

function multiply(a, b){
    return +a * +b;
}

function divide(a, b){
    return +a / +b;
}

function operate(a, b, operator){
    let result;
    switch(operator){
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case 'x':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
    }
    return result;
}

