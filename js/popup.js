'use strict';

(function() {

    let ESC_CODE = 27;
    let ENTER_CODE = 13;    
    let inputName = document.querySelector('.setup-user-name');
    let setupOpen = document.querySelector('.setup-open');
    let setupClose = document.querySelector('.setup-close');

    function openSetupPopup () {
        window.setupWizard.setup.classList.remove('hidden');
        setupOpen.removeEventListener('keydown', popupEnterPress);
        document.addEventListener('keydown', popupEscPress);
        document.setupStartX = window.setupWizard.setup.offsetLeft;
        document.setupStartY = window.setupWizard.setup.offsetTop;
    }
    
    function closeSetupPopup () {
    
        if (inputName !== document.activeElement) {
            window.setupWizard.setup.classList.add('hidden');
            setupOpen.addEventListener('keydown', popupEnterPress);
            document.removeEventListener('keydown', popupEscPress);
            window.setupWizard.setup.style.top = document.setupStartY + 'px';
            window.setupWizard.setup.style.left = document.setupStartX + 'px';
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

})();