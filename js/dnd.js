'use strict';

(function() {

let userPopupImg = document.querySelector('.upload input');


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

        window.setupWizard.setup.style.top = (window.setupWizard.setup.offsetTop - shift.y) + 'px';
        window.setupWizard.setup.style.left = (window.setupWizard.setup.offsetLeft - shift.x) + 'px';
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

})();