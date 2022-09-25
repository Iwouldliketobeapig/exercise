function arrRemoveSame (arr: number[]): number[] {
  return [...(new Set(arr))]
}
function arrRemoveSame1 (arr: number[]): number[] {
  const result = arr.filter((ele, index) => {
    return arr.indexOf(ele) === index;
  })
  return result;
}

console.log(arrRemoveSame([1, 2, 2, 3]))
console.log(arrRemoveSame1([1, 2, 2, 3]))