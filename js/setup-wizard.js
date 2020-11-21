'use strict';

(function () {

let setup = document.querySelector('.setup');
let coatColor = setup.querySelector('.setup-wizard .wizard-coat');
let eyesColor = setup.querySelector('.setup-wizard .wizard-eyes');
let fireballColor = setup.querySelector('.setup-fireball-wrap');
let inputCoatColor = setup.querySelector('.hidden-coat-color').value;
let inputEyesColor = setup.querySelector('.hidden-eyes-color').value;
let inputFireballColor = setup.querySelector('.hidden-fireball-color').value;
let fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

function changeColorCoat () {
    let randColor = window.setup.generateRandomNun( window.setup.coatColors.length - 1 );
    coatColor.style.fill = window.setup.coatColors[randColor];
    inputCoatColor = window.setup.coatColors[randColor];
};

function changeColorEyes () {
    let randColor = window.setup.generateRandomNun( window.setup.eyesColors.length - 1 );
    eyesColor.style.fill = window.setup.eyesColors[randColor];
    inputEyesColor = window.setup.eyesColors[randColor];
};

function changeColorfireball () {
    let randColor = window.setup.generateRandomNun( fireballColors.length - 1 );
    fireballColor.style.background = fireballColors[randColor];
    inputFireballColor = fireballColors[randColor];
};

coatColor.addEventListener('click', changeColorCoat);
eyesColor.addEventListener('click', changeColorEyes);
fireballColor.addEventListener('click', changeColorfireball);

window.setupWizard = {
    'setup': setup
};

})();