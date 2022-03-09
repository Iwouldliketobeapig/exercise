Function.prototype.call2 = function (context) {
  var context = context || window || global;
  context.fn = this;
  var args = [];
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push(`arguments[${i}]`);
  }

  console.log('context.fn(' + args + ')');
  var result = eval('context.fn(' + args + ')');
  delete context.fn;
  return result;
}

let a = { b: 1};
function b () {
  console.log(this.b);
}

b.call2(a, 1, 2);