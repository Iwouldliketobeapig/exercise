Array.prototype.forEach1 = function (callback, thisArg) {
  let index = 0;
  thisArg = thisArg || this;
  while(index < this.length) {
    callback.call(thisArg, thisArg[index], index, thisArg);
    index ++;
  }
}

let a = [1, 2, 3];
let b = [4, 5, 6];
a.forEach1((val, index, arr) => {
  console.log(val, index, arr);
}, b);
a.forEach((val, index, arr) => {
  console.log(val, index, arr);
}, b);