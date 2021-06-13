import Extras from "./Extras.js";
import Vars from "./Vars.js"
import Functions from "./Functions.js"

const TopMenu = function() {
    return `<div class="container-fluid">
                <div class="row">
                    ${Extras()}
                    ${Vars()}
                    ${Functions()}
                </div>
            </div>`;
}

export default TopMenu;

