var display = document.getElementById('display');

var currentNumber = '0';
var previousNumber = '';
var operator = '';

function updateScreen() {
    if (operator != '') {
        display.innerText = previousNumber + ' ' + operator + ' ' + currentNumber;
    } else {
        display.innerText = currentNumber;
    }
}

function addNumber(num) {
    if (num === '.' && currentNumber.includes('.')) {
        return;
    }

    if (currentNumber === '0' && num !== '.') {
        currentNumber = num;
    } else {
        currentNumber = currentNumber + num;
    }
    updateScreen();
}

function addOperator(op) {
    if (operator != '') {
        solve();
    }
    previousNumber = currentNumber;
    operator = op;
    currentNumber = ''; 
    updateScreen();
}

function clearScreen() {
    currentNumber = '0';
    previousNumber = '';
    operator = '';
    updateScreen();
}

function deleteChar() {
    if (currentNumber.length > 1) {
        currentNumber = currentNumber.slice(0, -1);
    } else {
        currentNumber = '0';
    }
    updateScreen();
}

function solve() {
    var res = 0;
    var n1 = parseFloat(previousNumber);
    var n2 = parseFloat(currentNumber);

    if (operator === '+') {
        res = n1 + n2;
    } else if (operator === '-') {
        res = n1 - n2;
    } else if (operator === '*') {
        res = n1 * n2;
    } else if (operator === '/') {
        res = n1 / n2;
    }

    currentNumber = res.toString();
    operator = ''; 
    previousNumber = '';
    updateScreen();
}

