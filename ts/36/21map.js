Array.prototype.map1 = function (callback, thisArg) {
  let index = 0;
  thisArg = thisArg || this;
  let mapArr = [];
  while (index < this.length) {
    mapArr.push(callback.call(thisArg, thisArg[index], index, thisArg));
    index++;
  }
  return mapArr;
}

let a = [1, 2, 3];
let b = [4, 5, 6];
console.log(a.map(ele => ele + 2));
console.log(a.map((val, index, arr) => val * 2), b)
console.log(a.map1(ele => ele + 2));
console.log(a.map1((val, index, arr) => val * 2), b)