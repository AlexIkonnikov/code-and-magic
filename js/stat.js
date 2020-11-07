'use strict';

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