// 归并排序
import { arrSortFun } from '../types/funTypes';

type numberArr = number[];

function reversePairs(nums: number[]): number {
  let total = 0;

  const merge = function (left: numberArr, right: numberArr): numberArr {
    const result = [];
    let i = 0, j = 0;
    while (true) {
      if (left[i] > right[j]) {
        result.push(left[j]);
        total += left.length - i;
        j++
      } else {
        result.push(left[i]);
        i++;
      }
      if (i === left.length || j === right.length) {
        return [...result as numberArr, ...left, ...right];
      }
    }
  }

  const mergeSort: arrSortFun = function (arr) {
    if (arr.length < 2) return arr;
    let centerIndex = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, centerIndex)), mergeSort(arr.slice(centerIndex, arr.length)))
  }

  mergeSort(nums);

  return total;
}



console.log(reversePairs([1, 123, 12, 1, 12, 64])); 