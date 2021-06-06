"use strict";
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.events = {};
    }
    EventEmitter.prototype.on = function (type, callback) {
        if (this.events[type]) {
            this.events[type].push(callback);
        }
        else {
            this.events[type] = [callback];
        }
    };
    EventEmitter.prototype.emit = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.events[type]) {
            return;
        }
        this.events[type].forEach(function (ele) { return ele.apply(void 0, args); });
    };
    EventEmitter.prototype.off = function (type, callback) {
        if (!this.events[type])
            return;
        this.events[type] = this.events[type].filter(function (ele) { return callback !== ele; });
    };
    EventEmitter.prototype.once = function (type, callback) {
        var _this = this;
        function fn() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            callback.apply(void 0, args);
            _this.off(type, fn);
        }
        this.on(type, fn);
    };
    return EventEmitter;
}());
var eventEmitter = new EventEmitter();
var onCallback = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
};
eventEmitter.on('test', onCallback);
eventEmitter.emit('test', 1, 2, 3);
eventEmitter.emit('test', 4, 5, 6);
eventEmitter.off('test', onCallback);
eventEmitter.emit('test', 7, 8, 9);
eventEmitter.once('once', function (str) { console.log(str); });
eventEmitter.emit('once', 'once');
eventEmitter.emit('once', 'two');
//# sourceMappingURL=eventEmitter.js.map