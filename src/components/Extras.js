import CalculatorBtn from "./CalculatorBtn.js";

const Extras = function () {
    return `<div id="extras" class="col">
    <div class="row">
        ${CalculatorBtn('sin(', 'sin', 'extra')}
        ${CalculatorBtn('cos(', 'cos', 'extra')}
        ${CalculatorBtn('tan(', 'tan', 'extra')}
    </div>
    <div class="row">
        ${CalculatorBtn('sqrt(', 'sqrt', 'extra')}
        ${CalculatorBtn('log(', 'log', 'extra')}
        ${CalculatorBtn('ln(', 'ln', 'extra')}
    </div>
    <div class="col">
        <div class="row">
            ${CalculatorBtn('e', 'e', 'extra')}
            ${CalculatorBtn('&pi;', 'pi', 'extra')}
            ${CalculatorBtn('<em>i</em>', 'i', 'extra')}
        </div>
    </div>
</div>`;
}

export default Extras;
