const numbers = document.querySelector(".num-op");
const display = document.querySelector(".display");
let firstNumber = null, secondNumber = null, operator = null, inOperation = false, result;
numbers.addEventListener("click", (event) => {
    if(event.target.className.includes("number")){
        getNumber(event);
    }
    if(event.target.className.includes("operator")){
        /*if(firstNumber && secondNumber){
            console.log("yes and yes");
            result = operate(firstNumber, secondNumber, operator);
            display.textContent = result;
            firstNumber = display.textContent;
            secondNumber = null;
        }*/
        inOperation = true;
        operator = getOperator(event);
    }
    if(event.target.className == "do"){
        secondNumber = display.textContent;
        result = operate(firstNumber, secondNumber, operator);
        display.textContent = result;
        firstNumber = display.textContent;
        secondNumber = null;
    }
});

function getOperator(event){
    operator = event.target.textContent; 
    if(firstNumber == null){
        firstNumber = display.textContent;
    }
    else{
        if(secondNumber == null){
            secondNumber = display.textContent;
        }       
    }
    return operator;
}

function getNumber(event){
    let number = event.target.textContent; 
    if(inOperation) {
        display.textContent = '';
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

