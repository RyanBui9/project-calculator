function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let a = "";
let b = "";
let operator = "";
let hasPressedOperator = false;

function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    } else if (operator === "-") {
        return subtract(a, b)
    } else if (operator === "*") {
        return multiply(a, b);
    } else if (operator === "/") {
        return divide(a, b);
    }
}

const inputBox = document.getElementById("inputBox");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.textContent === "AC") {
            inputBox.value = "";
            a = "";
            b = "";
            operator = "";
            hasPressedOperator = false;
            return;
        }

        if (event.target.textContent === "=") {
            a = operate(operator, parseInt(a), parseInt(b));
            inputBox.value = a;
            b = "";
            hasPressedOperator = false;
        }

        if (button.id === "digit") {
            if (!hasPressedOperator) {
                inputBox.value = a + event.target.textContent;
                a = inputBox.value;
            } else if (hasPressedOperator) {
                inputBox.value = b + event.target.textContent;
                b = inputBox.value;
            }
        } else {
            if (hasPressedOperator) {
                triggerOperate();
            }
            operator = event.target.textContent;
            hasPressedOperator = true;
        }
    });
})

function triggerOperate() {
    a = operate(operator, parseInt(a), parseInt(b));
    inputBox.value = a;
    b = "";
    hasPressedOperator = false;
}