// 二分查找
function binarySearch (arr: number[], target: number, start: number = 0): number {
  console.log(arr, target, start);
  if (arr.length < 2) {
    return arr[0] === target ? start : -1;
  } 
  const middleIndex = Math.floor((arr.length / 2));
  if (arr[middleIndex] === target) {
    return middleIndex + start;
  }
  if (arr[middleIndex] > target) {
    return binarySearch(arr.slice(0, middleIndex), target, start);
  } else {
    return binarySearch(arr.slice(middleIndex + 1), target, middleIndex + start + 1);
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 0));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 2));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 7));
