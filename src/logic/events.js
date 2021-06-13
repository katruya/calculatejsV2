import {
    zero, one, two,
    three, four, five,
    six, seven, eight,
    nine,
    equal,
    clearOutput
} from "../utils/button_handler.js";

const numberBtnlistener = function () {
    // setup
    let zeroBtn = document.getElementById('zero');
    let oneBtn = document.getElementById('one');
    let twoBtn = document.getElementById('two');
    let threeBtn = document.getElementById('three');
    let fourBtn = document.getElementById('four');
    let fiveBtn = document.getElementById('five');
    let sixBtn = document.getElementById('six');
    let sevenBtn = document.getElementById('seven');
    let eightBtn = document.getElementById('eight');
    let nineBtn = document.getElementById('nine');

    // number button events
    zeroBtn.addEventListener('click', () => { zero() });

    oneBtn.addEventListener('click', () => { one() });

    twoBtn.addEventListener('click', () => { two() });

    threeBtn.addEventListener('click', () => { three() });

    fourBtn.addEventListener('click', () => { four() });

    fiveBtn.addEventListener('click', () => { five() });

    sixBtn.addEventListener('click', () => { six() });

    sevenBtn.addEventListener('click', () => { seven() });

    eightBtn.addEventListener('click', () => { eight() });

    nineBtn.addEventListener('click', () => { nine() });
}

const equalListener = function() {
    let equalBtn = document.getElementById('equals');
    equalBtn.addEventListener('click', () => { equal() });
}

const funcListener = function() {
    let clearBtn = document.getElementById('clear');
    clearBtn.addEventListener('click', () => { clearOutput() });
}

// main listener function
const listener = function() {
    numberBtnlistener();
    equalListener();
    funcListener();
}

export default listener;


