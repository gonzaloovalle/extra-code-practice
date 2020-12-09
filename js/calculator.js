(function () {
"use strict";

const calculator = {
    displayValue: 0,
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null
};

function inputNum(Num) {
    const {displayValue, waitingForSecondOperand} = calculator;

    if(waitingForSecondOperand === true) {
        calculator.displayValue = Num;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? Num : displayValue + Num;
    }
}

function inputDecimal(dot) {
    if(!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const {firstOperand, displayValue, operator} = calculator;
    const inputValue = parseFloat(displayValue);

    if(operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
    }

    if(firstOperand == null) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const currentValue = firstOperand || 0;
        const result = performCalculation[operator](currentValue, inputValue);

        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }


}

})();
