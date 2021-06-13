import evaluate from "../logic/evaluate.js";
import inputIsValid from "../utils/error_handler.js"

// Setting up
let memory = '';
let disk = memory;

// initializes output in DOM
const init = function(symbol, rawHtml) {
    const defaultText = '0';
    let output = document.getElementById('out');
    let memOutput = document.getElementById('mem-out');

    const replaceable = 
        (output.innerHTML === defaultText 
            || !inputIsValid(memory)) 
        && symbol != '.';

    if (replaceable) {
        output.innerHTML = rawHtml;
    }
    else {
        output.innerText += symbol;
    }
    memory += symbol;
    disk = memory;
    memOutput.innerHTML = `<h3>[MEM: ${disk} ]</h3>`;
    console.log('button pressed');
}

// clears even the history
const clearAll = function() {
    
}

// handle operations
const add = function() {

}

const subtract = function() {

}

const multiply = function() {

}

const divide = function() {

}

// handle clear button
const clearOutput = function() {
    let output = document.getElementById('out');
    output.innerText = '0'
    memory = '';
    disk = memory;
}

// handle = button
const equal = function() {
    
}

// handle . button
const decimal = function() {
    init('.', '<h1>.</h1>');
}

// handle 0 button
const zero = function() {
    init('0', '<h1>0</h1>');
}
// handle 1 button
const one = function() {
    init('1', '<h1>1</h1>');
}

// handle 2 button
const two = function() {
    init('2', '<h1>2</h1>');
}

// handle 3 button
const three = function() {
    init('3', '<h1>3</h1>');
}

// handle 4 button
const four = function() {
    init('4', '<h1>4</h1>');
}

// handle 5 button
const five = function() {  
    init('5', '<h1>5</h1>')
}

// handle 6 button
const six = function() {
    init('6', '<h1>6</h1>');
}

// handle 7 button
const seven = function() {
    init('7', '<h1>7</h1>');
}

// handle 8 button
const eight = function() {
    init('8', '<h1>8</h1>');
}

// handle 9 button
const nine = function() {
    init('9', '<h1>9</h1>');
}

export {
    zero, one, two,
    three, four, five,
    six, seven, eight,
    nine,
    clearOutput
};