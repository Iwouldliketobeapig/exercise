Array.prototype.reduce2 = function (callback, init) {
  let result;
  if (init !== undefined) {
    result = init;
    let i = 0;
    while (i < this.length) {
      result = callback(result, this[i], i, this);
      i++;
    }
    return result;
  } else {
    result = this[0];
    let i = 1;
    while (i < this.length) {
      result = callback(result, this[i], i, this);
      i++;
    }
    return result;
  }
}

console.log([1, 2, 3].reduce((acc, cur) => acc + cur));
console.log([1, 2, 3].reduce2((acc, cur) => acc + cur));
console.log([1, 2, 3].reduce((acc, cur) => acc + cur, 5));
console.log([1, 2, 3].reduce2((acc, cur) => acc + cur, 5));