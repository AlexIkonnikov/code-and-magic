'use strict';

(function() {
    let popup = document.querySelector('.setup');
    let form = document.querySelector('.setup-wizard-form');
    let formData = new FormData(form);

    let onError = function (message) {

        console.log(message);

    }
    
    let onSuccses = function (message) {
        console.log(message)
    }

    form.addEventListener('submit', function(evt) {
       
        evt.preventDefault();
        window.save(onError, onSuccses, formData);
        popup.classList.add('hidden');
    })    

})();
