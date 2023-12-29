Function.prototype._call = function (target, ...args) {
  const _this = target || window || global;
  const symbolPro = Symbol('pro');
  if (typeof _this !== 'object') return;
  _this[symbolPro] = this;
  _this[symbolPro](...args);
  delete _this[symbolPro];
}