import OutputArea from "../components/OutputArea.js";
import TopMenu from "../components/TopMenu.js";
import MainCalculator from "../components/MainCalculator.js";

const App = function () {
    return `<div id="calc-console" class="row">
                ${OutputArea()}
            </div>
            <div class="row">
                ${TopMenu()}
            </div>
            <div class="row">
                ${MainCalculator()}
            </div>
            </div>`;
}

export default App;
