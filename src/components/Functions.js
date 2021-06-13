import CalculatorBtn from "./CalculatorBtn.js";

const Functions = function() {
    return `<div id="functions" class="col">
    <div class="row">
        ${CalculatorBtn('? USAGE', 'help', 'func')}
    </div>
    <div class="row">
        ${CalculatorBtn('Clear Output', 'clear', 'func')}
    </div>
    <div class="row">
        ${CalculatorBtn('Clear All', 'clear-history', 'func')}
    </div>
</div>`;
}

export default Functions;