// 深克隆

import { anyObject } from '../types/funTypes';
import { isObject } from '../utils/judage';


function deepClone (obj: anyObject): object {
  let cloneObj: anyObject = {};
  for(let key in obj) {
    if (isObject(obj[key])) {
      cloneObj[key] = deepClone(obj[key]);
      continue;
    }
    cloneObj[key] = obj[key];
  }
  return cloneObj
}

const defaultDate = {
  a: 1, 
  b: { c: 3, d: 4 },
  e: 5,
}

const test = deepClone(defaultDate);
const test1 = defaultDate;
defaultDate.b.c = 123;

console.log(defaultDate);
console.log(test);
console.log(test1);