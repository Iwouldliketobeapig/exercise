function _new (target, ...args) {
  let result = Object.create(null);
  target.call(result, ...args);
  result.__proto__ = result.prototype;
  return result;
}