'use strict'; 

(function(){

    let template = document.querySelector('#similar-wizard-template').content;
    let pool = document.querySelector('.setup-similar-list');


    let renderWizard = function (wizard) {

        document.querySelector('.setup-similar').classList.remove('hidden');
        let wizardTemplate = template.cloneNode(true);
        wizardTemplate.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardTemplate.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardTemplate.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
        return wizardTemplate;
    };

    window.render = function (data) {

        let dataLength = data.length > 4 ? 4 : data.length;
        pool.innerHTML = '';
        for (let i = 0; i < dataLength; i++) {
            pool.appendChild(renderWizard(data[i]));
        }

        document.querySelector('.setup-similar').classList.remove('hidden');
    };


})();