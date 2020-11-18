'use strict';

(function(){
var WIDTH_CLOUD = 420;
var HEIGHT_CLOUD = 270;
var GAP = 10;
var HEIGHT_СOLUMN = 150;

var renderCloud = function (ctx, x, y, color) {

    ctx.fillStyle = color;
    ctx.fillRect(x, y, WIDTH_CLOUD, HEIGHT_CLOUD);

};

var renderText = function (ctx, x, y, text) {

    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(text, x, y);

};

var sortTimes = function (time) {

    for (let i = 0; i <= time.length -2; i++) {

        var max = time[i];

        for(let j= i + 1;  j <= time.length-1; j++) {

            if ( time[j] > max ) {

                max = time[j];
                let swap = time[i];
                time[i] = max;
                time[j] = swap;

            }
        }
    }
   return time[0];
}

window.renderStatistics = function (ctx, names, times) {

    renderCloud(ctx, 100 + GAP, 10 + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 100, 10, 'white');
    renderText(ctx, 150, 30, 'Ура вы победили!');
    renderText(ctx, 150, 60, 'Список результатов:');
    let maxTimes = sortTimes(times);

    for (let i = 0, x = 150 ; i <= names.length -1; i++, x += 90) {

        let y = 100 + (HEIGHT_СOLUMN - (times[i]/maxTimes * HEIGHT_СOLUMN));       

        if (names[i] === 'Вы') {

            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
            ctx.fillRect(x, y, 40, (times[i]/maxTimes * HEIGHT_СOLUMN));
            ctx.fillStyle = 'black';
            ctx.fillText(Math.round(times[i]), x, y-20);
            ctx.fillText(names[i], x, 260);

        } else {
    
            ctx.fillStyle = 'rgba(0, 0, 255,'+ (Math.random()+0.05)+')';
            ctx.fillRect(x, y, 40, (times[i]/maxTimes*HEIGHT_СOLUMN));
            ctx.fillStyle = 'black';
            ctx.fillText(Math.round(times[i]), x, y-20);
            ctx.fillText(names[i], x, 260);

        }

    }
};

})();

