const addCurring = (...args: (number)[]) => {
  let sum = args.reduce((current, last) => current + last);
  function addSum(num: void): number;
  function addSum(num: number): any;
  function addSum (num: any): any {
    if (num) {
      sum += num
      return addSum
    } else {
      return sum
    }
  }
  return addSum
}

console.log(addCurring(1)(2)(3)())
console.log(addCurring(1, 2, 3)(4)())