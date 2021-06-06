"use strict";
// 事件被触发n秒后再执行回调函数，如果在这n秒内又被触发，则重新计时
Object.defineProperty(exports, "__esModule", { value: true });
function antiShake(fun, delay) {
    var timeId;
    return function (str) {
        clearTimeout(timeId);
        timeId = setTimeout(function () { return fun(str); }, delay);
    };
}
function print(str) {
    console.log(str);
}
var test = antiShake(print, 1000);
test('123');
test('235');
test('789');
setTimeout(function () {
    test('500');
}, 500);
setTimeout(function () {
    test('1200');
}, 1200);
//# sourceMappingURL=antiShake.js.map