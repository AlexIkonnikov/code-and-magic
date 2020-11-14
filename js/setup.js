'use strict';
let ESC_CODE = 27;
let ENTER_CODE = 13;

let setup = document.querySelector('.setup');
let setupOpen = document.querySelector('.setup-open');
let setupClose = setup.querySelector('.setup-close');

let pool = document.querySelector('.setup-similar-list');
let template = document.querySelector('#similar-wizard-template').content;
let names = ['Иван', 'Хуан Себастья', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
let surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
let coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
let eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

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

function openSetupPopup () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPress);
}

function closeSetupPopup () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', popupEscPress);
}

function popupEscPress (evt) {
    if (evt.keyCode === ESC_CODE) {
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

