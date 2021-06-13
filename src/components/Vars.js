import CalculatorBtn from "./CalculatorBtn.js";

const Vars = function() {
    return `<div id="vars" class="col">
                <div class="row">
                    ${CalculatorBtn('X', 'x', 'variable-btn')}
                </div>
                <div class="row">
                    ${CalculatorBtn('Y ', 'y', 'variable-btn')}
                </div>
                <div class="row">
                    ${CalculatorBtn('Z', 'z', 'variable-btn')}
                </div>
            </div>
            <div id="var-btns" class="col">
                <div class="row">
                    ${CalculatorBtn('X=', 'x-equal', 'variable-btn')}
                </div>
                <div class="row">
                    ${CalculatorBtn('Y= ', 'y-equal', 'variable-btn')}
                </div>
                <div class="row">
                    ${CalculatorBtn('Z=', 'z-equal', 'variable-btn')}
                </div>
            </div>`;
}

export default Vars;
