(function() {

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

})();