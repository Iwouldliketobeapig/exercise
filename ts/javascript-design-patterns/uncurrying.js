Function.prototype.uncurrying = function () {
  const _self = this;
  return function () {
    var obj = Array.prototype.shift.call(arguments);
    console.log(arguments, 111)
    return _self.apply(obj, arguments);
  }
}

const push = Array.prototype.push.uncurrying();

(function(...args) {
  push(arguments, 4);
  console.log(arguments);
})(1, 2, 3)

const obj = {
  "length": 1,
  "0": 1,
}

push(obj, 2);

console.log(obj);