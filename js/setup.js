'use strict';
let ESC_CODE = 27;
let ENTER_CODE = 13;

let setup = document.querySelector('.setup');
let setupOpen = document.querySelector('.setup-open');
let setupClose = setup.querySelector('.setup-close');
let inputName = setup.querySelector('.setup-user-name');
let coatColor = setup.querySelector('.setup-wizard .wizard-coat');
let eyesColor = setup.querySelector('.setup-wizard .wizard-eyes');
let fireballColor = setup.querySelector('.setup-fireball-wrap');

/*-Скрытые поля форм-*/
let inputCoatColor = setup.querySelector('.hidden-coat-color').value;
let inputEyesColor = setup.querySelector('.hidden-eyes-color').value;
let inputFireballColor = setup.querySelector('.hidden-fireball-color').value;

let pool = document.querySelector('.setup-similar-list');
let template = document.querySelector('#similar-wizard-template').content;
let names = ['Иван', 'Хуан Себастья', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
let fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

let generateRandomNun = function (max) {

    let randNum = Math.random() * (max + 1);
    return Math.floor(randNum);

};

let selectRandomValue = function (arr) {

    return arr[ generateRandomNun(arr.length-1) ];

};

let createArrayWizards = function () {

    let arrayWizards = [];
    
    for (let i = 0; i <= 3; i++) {

        let wizard = {
            name: selectRandomValue(names) + ' ' + selectRandomValue(surnames),
            coatColor: selectRandomValue(coatColors),
            eyesColor: selectRandomValue(eyesColors)
        }

        arrayWizards.push(wizard);

    }

    return arrayWizards;

};

let generateWizards = function (array) {

    document.querySelector('.setup-similar').classList.remove('hidden');
    
    for(let i = 0; i <= array.length - 1; i++) {

        let wizard = template.cloneNode(true);
        wizard.querySelector('.setup-similar-label').textContent = array[i].name;
        wizard.querySelector('.wizard-coat').style.fill = array[i].coatColor;
        wizard.querySelector('.wizard-eyes').style.fill = array[i].eyesColor;
        pool.appendChild(wizard);

    }

};

generateWizards(createArrayWizards());

/*-----------------------------------------------------------------------------------*/

function openSetupPopup () {
    setup.classList.remove('hidden');
    setupOpen.removeEventListener('keydown', popupEnterPress);
    document.addEventListener('keydown', popupEscPress);
    document.setupStartX = setup.offsetLeft;
    document.setupStartY = setup.offsetTop;
}

function closeSetupPopup () {

    if (inputName !== document.activeElement) {
        setup.classList.add('hidden');
        setupOpen.addEventListener('keydown', popupEnterPress);
        document.removeEventListener('keydown', popupEscPress);
        setup.style.top = document.setupStartY + 'px';
        setup.style.left = document.setupStartX + 'px';
    }
}

function popupEscPress (evt) {

    if (evt.keyCode === ESC_CODE && inputName !== document.activeElement) {
        closeSetupPopup();
    }

}

function popupEnterPress (evt) {

    if (evt.keyCode === ENTER_CODE) {
        openSetupPopup ();
    }

}


setupOpen.addEventListener('keydown', popupEnterPress);
setupOpen.addEventListener('click', openSetupPopup);

setupClose.addEventListener('click', closeSetupPopup);
setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
        closeSetupPopup();
    }
});
/*-----------------------------------------------------------------------------------*/

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


/*------------------------Drag and Drop-----------------------*/

let userPopupImg = setup.querySelector('.upload input');


userPopupImg.addEventListener('mousedown', function(evt) {

    evt.preventDefault();
    
    let startСoordinates = {
        x: evt.clientX,
        y: evt.clientY,
    }

    var drag = false;

    function onMouseMove (moveEvt) {
        moveEvt.preventDefault();
        let shift = {
            x: startСoordinates.x - moveEvt.clientX,
            y: startСoordinates.y - moveEvt.clientY
        };

        startСoordinates = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
        };

        setup.style.top = (setup.offsetTop - shift.y) + 'px';
        setup.style.left = (setup.offsetLeft - shift.x) + 'px';
        drag = true;
    }

    function onMouseUp(evtUp) {
        evtUp.preventDefault();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (drag) {
            userPopupImg.addEventListener('click', clickPreventDefault);
            function clickPreventDefault (evt) {
                evt.preventDefault();
                userPopupImg.removeEventListener('click', clickPreventDefault);
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});
