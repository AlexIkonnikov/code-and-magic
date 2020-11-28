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
let coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

let generateRandomNun = function (array) {

    let randIndex = Math.floor(Math.random() * array.length);
    return array[randIndex];

};

function changeCoatColor () {
    let newColor = generateRandomNun( coatColors );
    coatColor.style.fill = newColor;
    inputCoatColor = newColor;
    window.similar.onChangeCoat(newColor);
};

function changeEyesColor () {
    let newColor = generateRandomNun( eyesColors );
    eyesColor.style.fill = newColor;
    inputEyesColor = newColor;
    window.similar.onChangeEyes(newColor);
};

function changefireballColor () {
    let newColor = generateRandomNun( fireballColors );
    fireballColor.style.background = newColor;
    inputFireballColor = newColor;
};

coatColor.addEventListener('click', function() {
    changeCoatColor();
});

eyesColor.addEventListener('click', function() {
    changeEyesColor();
});

fireballColor.addEventListener('click', function() {
    changefireballColor();
});



window.setupWizard = {
    'setup': setup,
};

})();