Function.prototype.bind2 = function(context, ...defaultArgs) {
  const fn = this;
  return function(...args) {
    return fn.call(context, ...defaultArgs.concat(args.splice(0, defaultArgs.length)))
  }
}

const a = {
  b: 123,
}

function c (d) {
  return d + this.b;
}

const c1 = c.bind2(a, 123);
const c2 = c.bind(a, 123);
console.log(c1(1), c2(1));