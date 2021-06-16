Function.prototype.myCall = function (context, ...args) {
  if (!context || context === null) {
    context = globalThis;
  }
  const fn = Symbol('call');
  context[fn] = this;
  return context[fn](...args);
}

Function.prototype.myApply = function (context, args) {
  if (!context || context === null) {
    context = globalThis;
  }
  const fn = Symbol('apply');
  context[fn] = this;
  return context[fn](...args);
}

Function.prototype.bind = function (context, args) {
  if (!context || context === null) {
    context = globalThis;
  }
  const fn = Symbol('bind');
  context[fn] = this;
  let _this = this;
  const result = function (...innerArgs) {
    if (this instanceof _this === true) {
      this[fn] = _this;
      this[fn](...[...args, ...innerArgs]);
      delete this[fn];
    } else {
      context[fn](...[...args, ...innerArgs]);
      delete context[fn];
    }
  }
  result.prototype = Object.create(this.prototype);
  return result;
}