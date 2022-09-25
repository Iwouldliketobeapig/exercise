// 归并排序
import { arrSortFun } from '../types/funTypes';

type numberArr = number[];

const merge = function (left: numberArr, right: numberArr): numberArr {
  const result = [];
  while(left.length > 0 && right.length > 0) {
    if (left[0] > right[0]) {
      result.push(right.shift())
    } else {
      result.push(left.shift())
    }
  }
  return [...result as numberArr, ...left, ...right];
}

const mergeSort: arrSortFun = function (arr) {
  if (arr.length < 2) return arr;
  let centerIndex = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, centerIndex)), mergeSort(arr.slice(centerIndex, arr.length)))
}

console.log(mergeSort([1, 123, 12, 1, 12, 64])); 