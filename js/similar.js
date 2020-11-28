'use strict';

(function(){
    let wizards = [];
    let colorCoat; 
    let colorEyes;

    let getPoint = function (wizard) {
        let point;
        if (wizard.colorCoat === colorCoat) {
            point += 2;
        }
        if (wizard.colorEyes === colorEyes) {
            point += 1;
        }
        return point;
    };

    let diffRank = function (left, right) {
        let diff = getPoint(left) - getPoint(right);
        return diff;  
    };

    let updateFilter = function (array) {
        window.render(array.sort(diffRank));
    };

    let onChangeCoat = function (color) {
        colorCoat = color;
        updateWizards();
    };

    let onChangeEyes = function (color) {
        colorEyes = color;
        updateWizards();
    };

    window.updateWizards = function () {

        let sameCoatAdnEyesWizards = wizards.filter(function(it) {
            return it.colorCoat === colorCoat && 
            it.colorEyes === colorEyes;
        });

        let sameCoatWizrds = wizards.filter(function(it){
            return it.colorCoat  === colorCoat;
        });

        let sameEyesWizards = wizards.filter(function(it) {
            return it.colorEyes === colorEyes;
        });

        let filterWizards = sameCoatAdnEyesWizards;

        filterWizards = filterWizards.concat(sameCoatWizrds);
        filterWizards = filterWizards.concat(sameEyesWizards);
        filterWizards = filterWizards.concat(wizards);
        
        let unRecurringWizards = filterWizards.filter(function(it, index) {
            return filterWizards.indexOf(it) === index;
        });

        updateFilter(unRecurringWizards);
    };

    let onSuccses = function(data) {
        wizards = data;
        window.render(wizards);
    };





    let onError = function (message) {
        console.log(message);
    };

    window.load(onError, onSuccses);

    window.similar = {
        'onChangeCoat': onChangeCoat,
        'onChangeEyes': onChangeEyes
    }
})();