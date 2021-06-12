import CalculatorBtn from "./CalculatorBtn.js";
import OutputArea from "./OutputArea.js";

const App = function () {
    return `${OutputArea()}
            <div class="col">
                <div class="row">
                    ${CalculatorBtn('7', 'seven')}
                    ${CalculatorBtn('8', 'eight')}
                    ${CalculatorBtn('9', 'nine')}
                    ${CalculatorBtn('/', 'divide')}
                </div>
                <div class="row">
                    ${CalculatorBtn('4', 'four')}
                    ${CalculatorBtn('5', 'five')}
                    ${CalculatorBtn('6', 'six')}
                    ${CalculatorBtn('x', 'multiply')}
                </div>
                <div class="row">
                    ${CalculatorBtn('1', 'one')}
                    ${CalculatorBtn('2', 'two')}
                    ${CalculatorBtn('3', 'three')}
                    ${CalculatorBtn('-', 'subtract')}
                </div>
                <div class="row">
                    ${CalculatorBtn('0', 'zero')}
                    ${CalculatorBtn('.', 'decimal')}
                    ${CalculatorBtn('=', 'equals')}
                    ${CalculatorBtn('+', 'plus')}
                </div>
            </div>`;
}

export default App;
