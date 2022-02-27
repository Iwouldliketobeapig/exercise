// 正确判断数据类型
function _judgementType (target: any): string {
  const typeString = Object.prototype.toString.call(target);
  return typeString.substring(8, typeString.length - 1);
}

function judgementType (target: any): string {
  return Object.prototype.toString.call(target).slice(8, -1);
}

console.log(_judgementType('asd'));
console.log(_judgementType([]));
console.log(judgementType('asd'));
console.log(judgementType([]));