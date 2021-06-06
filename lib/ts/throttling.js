"use strict";
// 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只能有一次能生效。
Object.defineProperty(exports, "__esModule", { value: true });
function throttling(callback, delay) {
    var timeId;
    return function (str) {
        if (timeId)
            return;
        timeId = setTimeout(function () {
            timeId = null;
            callback(str);
        }, delay);
    };
}
function print(str) {
    console.log(str);
}
var test = throttling(print, 1000);
test('asdas');
test('123123');
setTimeout(function () {
    test('2000');
}, 2000);
//# sourceMappingURL=throttling.js.map