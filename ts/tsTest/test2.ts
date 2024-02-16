// 函数重载
function f(a: string, b: string): string;
function f(a: number, b: number): number;
// function f(a: number, b: string): string;
// function f(a: string, b: number): string;
function f(a: string | number, b: string | number) {
  if (typeof a === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else {
    return (a as number) + (b as number); // error as b can be number | string
  }
}

f(2, 3); // Ok
f(1, 'a'); // Error
f('a', 2); // Error
f('a', 'b') // Ok

// 泛型
function f1<T extends string | number>(a: T, b: T) {
  if (typeof a === 'string') {
    return a + ':' + b;
  } else {
    return (a as number) + (b as number);
  }
}

f1(2, 3); // Ok
f1(1, 'a'); // Error
f1('a', 2); // Error
f1('a', 'b') // Ok