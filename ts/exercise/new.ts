function _new (target: any, ...args: any[]): object {
  let result = Object.create(target.prototype); // 用已有对象作为新对象的原型创建一个对象
  const res = target.apply(result, args);
  if (res && typeof res === 'object' || typeof res === 'function') return res;
  return result;
}