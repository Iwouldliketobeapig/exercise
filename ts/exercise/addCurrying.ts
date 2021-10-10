const addCurring = (...args: (number)[]) => {
  let sum = args.reduce((current, last) => current + last);
  const addSum = (num: number | void) => {
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