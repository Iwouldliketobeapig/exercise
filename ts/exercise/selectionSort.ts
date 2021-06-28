// 选择排序，选择一个最小的值，然后交换值

function selectionSort(arr: number[]): number[] {
  const arrLength = arr.length; 
  if (arrLength < 2) return arr;
  for(let i = 0; i < arrLength; i ++) {
    let minIndex = i;
    for (let j = i + 1; j < arrLength; j ++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  } 
  return arr;
}

console.log(selectionSort([1, 123, 12, 1, 23, 345]));