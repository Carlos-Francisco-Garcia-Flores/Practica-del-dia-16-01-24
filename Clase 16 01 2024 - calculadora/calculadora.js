import * as operaciones from './operaciones.js';

const display = document.getElementById('display');
let currentInput = '';
let currentOperation = null;

const clearDisplay = () => {
    currentInput = '';
    currentOperation = null;
    updateDisplay();
};

const deleteLast = () => {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
};

const appendNumber = (number) => {
    currentInput += number;
    updateDisplay();
};

const setOperation = (operation) => {
    if (currentInput !== '') {
        currentOperation = operation;
        currentInput += operation;
        updateDisplay();
    }
};

const appendDecimal = () => {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
};

const calculateResult = () => {
    if (currentOperation) {
        const operands = currentInput.split(currentOperation);
        if (operands.length === 2) {
            const v1 = parseFloat(operands[0]);
            const v2 = parseFloat(operands[1]);

            switch (currentOperation) {
                case '+':
                    currentInput = operaciones.sum(v1, v2).toString();
                    break;
                case '-':
                    currentInput = operaciones.res(v1, v2).toString();
                    break;
                case '*':
                    currentInput = operaciones.mult(v1, v2).toString();
                    break;
                case '/':
                    currentInput = operaciones.div(v1, v2).toString();
                    break;
            }
            currentOperation = null;
            updateDisplay();
        }
    }
};

const updateDisplay = () => {
    display.value = currentInput;
};

document.getElementById('btnC').addEventListener('click', clearDisplay);
document.getElementById('btnDEL').addEventListener('click', deleteLast);
document.getElementById('btn7').addEventListener('click', () => appendNumber('7'));
document.getElementById('btn8').addEventListener('click', () => appendNumber('8'));
document.getElementById('btn9').addEventListener('click', () => appendNumber('9'));
document.getElementById('btnDiv').addEventListener('click', () => setOperation('/'));
document.getElementById('btn4').addEventListener('click', () => appendNumber('4'));
document.getElementById('btn5').addEventListener('click', () => appendNumber('5'));
document.getElementById('btn6').addEventListener('click', () => appendNumber('6'));
document.getElementById('btnMult').addEventListener('click', () => setOperation('*'));
document.getElementById('btn1').addEventListener('click', () => appendNumber('1'));
document.getElementById('btn2').addEventListener('click', () => appendNumber('2'));
document.getElementById('btn3').addEventListener('click', () => appendNumber('3'));
document.getElementById('btnSubtract').addEventListener('click', () => setOperation('-'));
document.getElementById('btnDecimal').addEventListener('click', appendDecimal);
document.getElementById('btn0').addEventListener('click', () => appendNumber('0'));
document.getElementById('btnEqual').addEventListener('click', calculateResult);
document.getElementById('btnAdd').addEventListener('click', () => setOperation('+'));