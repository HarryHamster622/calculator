const display = document.getElementById("display");

let a = "";
let b = "";
let o = null;
let isSecondNumber = false;

var vFinal;

function pressNumber(num) {
    if (!isSecondNumber) {
        a += num.toString();
        updateDisplay(a);
        return a;
    } else {
        b += num.toString();
        updateDisplay(b);
        return b;
    }
}

function pressOperator(operator) {
    if (a !== "" && !isSecondNumber) {
        o = operator;
        isSecondNumber = true;
    } else if (isSecondNumber) {
        a = operate(o, parseFloat(a), parseFloat(b));
        b = "";
        o = operator;
        updateDisplay(a);
    }
}

function equals() {
    if (a !== "" && b == "") {
        display.innerHTML = a;
        return a;
    } else {
        if (a !== "" && b !== "" && o !== null) {
            let result = operate(o, parseFloat(a), parseFloat(b));
    
            display.innerText = result.toString();
    
            a = result.toString();
            b = "";
            o = null;
            isSecondNumber = false;
        } else {
            a = "";
            b = "";
            o = null;
            isSecondNumber = false;
            display.innerText = "ERROR";
        }
    }
}

function operate(o, a, b) {
    switch (o) {
        case "+":
            vFinal = a + b;
            return vFinal.toString();
        case "-":
            vFinal = a - b;
            return vFinal.toString();
        case "*":
            vFinal = a * b;
            return vFinal.toString();
        case "/":
            vFinal = a / b;
            return vFinal.toString();
    }
}

function fullClear() {
    a = "";
    b = "";
    o = null;
    isSecondNumber = false;
    display.innerText = "";
}

function signChange() {
    if (!isSecondNumber) {
        a = parseFloat(a) * -1;
        a = a.toString();
        updateDisplay(a);
        return a;
    } else if (isSecondNumber == true) {
        b = parseFloat(b) * -1;
        b = b.toString();
        updateDisplay(b);
        return b;
    }
}

function addPoint() {
    if (!isSecondNumber) {
        if (!a.includes(".")) {
            if (a==="") {
                a = "0.";
                updateDisplay(a);
                return a;
            } else {
               a += ".";
              updateDisplay(a);
               return a;
            }
        }
    }
    else if (isSecondNumber) {
        if (!b.includes(".")) {
            if (b==="") {
                b = "0.";
                updateDisplay(b);
                return b;
            } else {
               b += ".";
              updateDisplay(b);
               return b;
            }
        }
    }
}
function updateDisplay(text) {
    if (text.length > 7) {
        display.innerText = text.slice(0, 7);
    } else {
        display.innerText = text;
    }
}