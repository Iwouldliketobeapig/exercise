// 插入排序，在有序序列中插入为排序元素

import { arrSortFun } from '../types/funTypes';

const insertSort: arrSortFun = function (arr) {
  const length = arr.length;
  if (length < 2) {
    return arr;
  }
  for (let i = 0; i < length; i++) {
    let j = i;
    let target = arr[j];
    while (j > 0 && arr[j - 1] > target) {
      arr[j] = arr[j -1];
      j--;
    }
    arr[j] = target;
  }
  return arr;
}

console.log(insertSort([1, 123, 12, 1, 12, 64])); 