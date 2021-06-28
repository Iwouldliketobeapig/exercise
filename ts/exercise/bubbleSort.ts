// 正序，依次相邻两元素对比，前面大则交换值

function bubbleSort (arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2, 3, 1, 6, 12, 46, 1, 53]))