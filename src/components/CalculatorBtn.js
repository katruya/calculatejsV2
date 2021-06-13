const CalculatorBtn = function(text, id, css = '') {
    return `<div id="${id}" class="col btn btn-success ${css}">
                ${text}
            </div>`;
}

export default CalculatorBtn;