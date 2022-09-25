function flat (arr: any[]): number[] {
  return arr.flat(Infinity);
}

function flat1(arr: any[]): number[] {
  const result = arr.reduce((a, current) => {
    if (current instanceof Array) {
      return [...a, ...flat1(current)];
    } else {
      return [...a, current];
    }
  })
  return result;
}

console.log(flat([1, [2, [3, 4]]]))
console.log(flat1([1, [2, [3, 4]]]))