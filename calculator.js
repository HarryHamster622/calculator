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
        return a;
    } else {
        b += num.toString();
        display.innerText = b;
        return b;
    }
}

function pressOperator(operator) {
    if (a !== "" && isSecondNumber == false) {
        o = operator;
        isSecondNumber = true;
    } else if (isSecondNumber == true) {
        a = operate(o, parseFloat(a), parseFloat(b));
        b = "";
        o = operator;
        display.innerText = a;
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
    if (isSecondNumber == false) {
        a = parseFloat(a) * -1;
        a = a.toString();
        display.innerText = a;
        return a;
    } else if (isSecondNumber == true) {
        b = parseFloat(b) * -1;
        b = b.toString();
        display.innerText = b;
        return b;
    }
}

function addPoint() {
    if (isSecondNumber == false) {
        if (!a.includes(".")) {
            if (a==="") {
                a = "0.";
                display.innerText = a;
                return a;
            } else {
               a += ".";
              display.innerText = a;
               return a;
            }
        }
    }
    else if (isSecondNumber == true) {
        if (!b.includes(".")) {
            if (b==="") {
                b = "0.";
                display.innerText = b;
                return b;
            } else {
               b += ".";
              display.innerText = b;
               return b;
            }
        }
    }
}