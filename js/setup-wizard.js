(function () {

let fireballColor = setup.querySelector('.setup-fireball-wrap');
let inputCoatColor = setup.querySelector('.hidden-coat-color').value;
let inputEyesColor = setup.querySelector('.hidden-eyes-color').value;
let inputFireballColor = setup.querySelector('.hidden-fireball-color').value;
let fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
function changeColorCoat () {
    let randColor = generateRandomNun( coatColors.length - 1 );
    coatColor.style.fill = coatColors[randColor];
    inputCoatColor = coatColors[randColor];
};

function changeColorEyes () {
    let randColor = generateRandomNun( eyesColors.length - 1 );
    eyesColor.style.fill = eyesColors[randColor];
    inputEyesColor = eyesColors[randColor];
};

function changeColorfireball () {
    let randColor = generateRandomNun( fireballColors.length - 1 );
    fireballColor.style.background = fireballColors[randColor];
    inputFireballColor = fireballColors[randColor];
};

coatColor.addEventListener('click', changeColorCoat);
eyesColor.addEventListener('click', changeColorEyes);
fireballColor.addEventListener('click', changeColorfireball);

})();