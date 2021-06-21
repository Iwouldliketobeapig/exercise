function _instanceof (target: any, origin: any): boolean {
  const _constructor = target.__proto__.constructor;
  if (_constructor === origin) return true;
  if (_constructor === Object) return false;
  return _instanceof(target.__proto__, origin);
}

class A {
  num: number;
  constructor (num: number) {
    this.num = num;
  }
}
const b = new A(123);

console.log(_instanceof(b, A));
console.log(_instanceof(b, Object));
console.log(_instanceof(b, String));