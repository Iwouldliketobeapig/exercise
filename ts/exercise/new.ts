function _new (target: any, ...args: any[]): object {
  let result = Object.create(target.prototype);
  const res = target.apply(result, args);
  if (res && typeof res === 'object' || typeof res === 'function') return res;
  return result;
}