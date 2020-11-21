(function() {

    window.load = function (onError, callback) {

        let xhr = new XMLHttpRequest ();
        let URL = "https://javascript.pages.academy/code-and-magick/data";
        xhr.responseType = 'json';
        xhr.timeout = 10000;

        xhr.addEventListener('load', function() {

            if (xhr.status === 200) {

                callback(xhr.response);

            } else {

                console.log('Упс, кажется что-то пошло не так. Код ошибки' + xhr.status);

            }
        });

        xhr.addEventListener('error', function() {
            onError('Упс, кажется что-то пошло не так. Код ошибки: ' + xhr.status);
        });

        xhr.addEventListener('timeout', function() {
            onError('Время ответа истекло. Код ошибки: ' + xhr.status);
        });

        xhr.open('get', URL);
        xhr.send();
    }

})();