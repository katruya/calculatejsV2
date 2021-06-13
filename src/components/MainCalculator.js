import CalculatorBtn from "./CalculatorBtn.js";

const MainCalculator = function() {
    return `<div id="main-calc-btns" class="col">
    <div class="row">
        ${CalculatorBtn('7', 'seven')}
        ${CalculatorBtn('8', 'eight')}
        ${CalculatorBtn('9', 'nine')}
        ${CalculatorBtn('/', 'divide', 'operation-btn')}
    </div>
    <div class="row">
        ${CalculatorBtn('4', 'four')}
        ${CalculatorBtn('5', 'five')}
        ${CalculatorBtn('6', 'six')}
        ${CalculatorBtn('x', 'multiply', 'operation-btn')}
    </div>
    <div class="row">
        ${CalculatorBtn('1', 'one')}
        ${CalculatorBtn('2', 'two')}
        ${CalculatorBtn('3', 'three')}
        ${CalculatorBtn('-', 'subtract', 'operation-btn')}
    </div>
    <div class="row">
        ${CalculatorBtn('0', 'zero')}
        ${CalculatorBtn('.', 'decimal')}
        ${CalculatorBtn('=', 'equals')}
        ${CalculatorBtn('+', 'plus', 'operation-btn')}
    </div>`;
}

export default MainCalculator;