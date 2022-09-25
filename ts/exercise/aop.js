Function.prototype.before = function (beforeFn) {
  var __self = this;
  return function () {
    beforeFn.apply(this, arguments);
    return __self.apply(this, arguments);
  }
}

var func = function (params) {
  console.log(params);
}

func = func.before(function (params) {
  params.b = 'b';
});

func({ a: 'a' })