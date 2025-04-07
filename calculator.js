const display = document.getElementById("display");

let a = "";
let b = "";
let o = null;
let isSecondNumber = false;

var vFinal;

function pressNumber(num) {
    if (!isSecondNumber) {
        a += num.toString();
        display.innerText = a;
    } else {
        b += num.toString();
        display.innerText = b;
    }
}

function pressOperator(operator) {
    if (a !== "") {
        o = operator;
        isSecondNumber = true;
    }
}

function equals() {
    if (a !== "" && b !== "" && o !== null) {
        let result = operate(o, parseFloat(a), parseFloat(b));

        display.innerText = result.toString();

        a = result.toString();
        b = "";
        o = null;
        isSecondNumber = false;
    }
}

function operate(o, a, b) {
    switch (o) {
        case "+":
            vFinal = a + b;
            return vFinal.toString();
            break;
        case "-":
            vFinal = a - b;
            return vFinal.toString();
            break;
        case "*":
            vFinal = a * b;
            return vFinal.toString();
            break;
        case "/":
            vFinal = a / b;
            return vFinal.toString();
            break;
    }
}