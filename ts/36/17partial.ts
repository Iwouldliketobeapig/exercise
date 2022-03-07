function partial (fn: any, ...args: any[]): any {
  let deal = (...args: any) => {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...arg: any[]) => deal(...args, ...arg);
  }

  return deal(...args);
}

function add2(a: number, b: number, c: number): number {
  return a + b + c;
}

let partialAdd2 = partial(add2, 1);
console.log(partialAdd2(2, 3))