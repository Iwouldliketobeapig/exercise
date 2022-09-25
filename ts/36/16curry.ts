function curry(fn: (...args: any[]) => any) {
  const fnArgs: any[] = []
  let dealCurry = (arg: any) => {
    fnArgs.push(arg);
    if (fnArgs.length >= fn.length) {
      return fn(...fnArgs)
    }
    return dealCurry;
  }
  return dealCurry;
}


function add1(a: number, b: number, c: number): number {
  return a + b + c
}

let addCurry = curry(add1);
console.log(addCurry(1)(2)(3));