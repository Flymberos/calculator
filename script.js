let numberButtons = document.querySelectorAll(".number");
let operationButtons = document.querySelectorAll(".operation");
let inputScreen = document.querySelector(".lower-part");
let upperScreen = document.querySelector(".upper-part");
let equals = document.querySelector(".equals");
let allClear = document.querySelector(".all-clear");
let del = document.querySelector(".delete");
let dot = document.querySelector(".dot");

let firstNumber = undefined;
let currentOperator = undefined;

numberButtons.forEach( (button) => {
    button.addEventListener("click", () => {
        inputScreen.textContent += button.textContent;
    })
});

del.addEventListener("click", () => {
    let number = inputScreen.textContent;
    if(number !== ""){
        inputScreen.textContent = number.substr(0, number.length - 1);
    }
})

dot.addEventListener("click", () => {

    if(inputScreen.textContent == ""){
        return;
    }

    if(inputScreen.textContent.includes(".")){
        return;
    }

    inputScreen.textContent = inputScreen.textContent + ".";

})

equals.addEventListener("click", () => {
    if(upperScreen.textContent !== ""){
        let result = operate(currentOperator, firstNumber, inputScreen.textContent);
        firstNumber = result;
        upperScreen.textContent = result;
        inputScreen.textContent = "";
    }
})

allClear.addEventListener("click", () => {
    firstNumber = undefined;
    currentOperator = undefined;
    upperScreen.textContent = "";
    inputScreen.textContent = "";
})

operationButtons.forEach( (button) => {
    button.addEventListener("click", () => {
        let operator = button.textContent.trim();
        switch(operator) {
            case "+":
                temp(operator);
                break;
            case "-":
                temp(operator);
                break;
            case "*":
                temp(operator);
                break;
            case "/":
                temp(operator);
                break;
            default:
                return;
        }
    })
})


let temp = (operator) => {

    if(firstNumber == undefined && inputScreen.textContent !== "") {
        firstNumber = inputScreen.textContent;
        currentOperator = operator;
        upperScreen.textContent = firstNumber + " " + currentOperator;
        inputScreen.textContent = "";
    }

    if(upperScreen.textContent.includes(currentOperator) && inputScreen.textContent !== ""){
        let result = operate(currentOperator, firstNumber, inputScreen.textContent);
        firstNumber = result;
        upperScreen.textContent = "";
        currentOperator = operator;
        upperScreen.textContent = firstNumber + " " + currentOperator;
        inputScreen.textContent = "";
    }

    if(upperScreen.textContent !== "" && !upperScreen.textContent.includes(operator)){
        upperScreen.textContent = firstNumber + " " + operator;
        currentOperator = operator;
    }

} 



//Logic
let add = (a, b) => {
    let result = a + b;
    return Math.round(result * 10) / 10;
}

let subtract = (a, b) => {
    let result = a - b;
    return Math.round(result * 10) / 10;
}

let multiply = (a, b) => {
    let result = a * b;
    return Math.round(result * 10) / 10;
}

let divide = (a, b) => {
    let result = a / b;
    return Math.round(result * 10) / 10;
}

let operate = (operator, a, b) => {

    a = Number(a);
    b = Number(b); 

    switch(operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return;
    }

}

