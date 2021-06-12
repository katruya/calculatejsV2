import inputIsValid from "./error_handler.js";

const evaluate = function(expression) {
    return !inputIsValid(expression) ? 
           `<h2 class="text-danger">Error - Invalid Syntax</h2>`
           : eval(expression);
}

export default evaluate;