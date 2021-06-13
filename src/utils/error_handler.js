const inputIsValid = function(expression) {
    try {
        return !isNaN(eval(expression));
    } catch (err) {
        return false;
    }
}

export default inputIsValid;