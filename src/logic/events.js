import {
    zero, one, two,
    three, four, five,
    six, seven, eight,
    nine,
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

    let clearBtn = document.getElementById('clear');

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

const funcListener = function() {
    clearBtn.addEventListener('click', () => { clearOutput() });
}

// main listener function
const listener = function() {
    numberBtnlistener();
    funcListener();
}

export default listener;


