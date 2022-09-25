function _instanceof (target, result) {
  let proto = target.__proto__;
  while (true) {
    if (proto === null) return false;
    if (proto === result.prototype) return true;
    proto = proto.__proto__;
  }
}

console.log(_instanceof(1, Array));