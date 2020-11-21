'use strict';

(function() {
    let popup = document.querySelector('.setup');
    let form = document.querySelector('.setup-wizard-form');
    let formData = new FormData(form);
    let pool = document.querySelector('.setup-similar-list');
    let template = document.querySelector('#similar-wizard-template').content;
    let coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    let eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

    let generateRandomNun = function (max) {

        let randNum = Math.random() * (max + 1);
        return Math.floor(randNum);

    };

    let showWizards = function (array) {

        document.querySelector('.setup-similar').classList.remove('hidden');
        
        for(let i = 0; i <= 3; i++) {

            let wizard = template.cloneNode(true);
            wizard.querySelector('.setup-similar-label').textContent = array[i].name;
            wizard.querySelector('.wizard-coat').style.fill = array[i].colorCoat;
            wizard.querySelector('.wizard-eyes').style.fill = array[i].colorEyes;
            pool.appendChild(wizard);

        }

    };

    let onError = function (message) {

        console.log(message);

    }
    
    let onSuccses = function (message) {
        console.log(message)
    }


    window.setup = {
        'coatColors': coatColors,
        'eyesColors': eyesColors,
        'generateRandomNun': generateRandomNun
    };

    form.addEventListener('submit', function(evt) {
       
        evt.preventDefault();
        window.save(onError, onSuccses, formData);
        popup.classList.add('hidden');
    })    

    window.load(onError, showWizards);

})();
