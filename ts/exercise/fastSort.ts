// 快速排序

import { arrSortFun } from '../types/funTypes';

const fastSort: arrSortFun = function (arr) {
  if (arr.length < 2) return arr;
  const centerValue = arr.splice(Math.floor(arr.length / 2), 1)[0];
  let leftArr: number[] = [];
  let rightArr: number[] = [];
  arr.forEach(ele => {
    if (ele > centerValue) {
      rightArr.push(ele);
    } else {
      leftArr.push(ele);
    }
  })
  return fastSort(leftArr).concat([centerValue], fastSort(rightArr));
}

console.log(fastSort([1, 123, 12, 1, 12, 64]));