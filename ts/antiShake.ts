// 事件被触发n秒后再执行回调函数，如果在这n秒内又被触发，则重新计时

// type Fun1 = (...args: any[] | never) => any | void;
// type Fun2 = (str: string) => void;
import { Fun1, Fun2 } from './throttling';

function antiShake (fun: Fun1, delay: number): Fun2 {
  let timeId: any;
  return str => {
    clearTimeout(timeId);
    timeId = setTimeout(() => fun(str), delay);
  }
}

function print (str: string): void {
  console.log(str);
}

const test = antiShake(print, 1000);

test('123');
test('235');
test('789');
setTimeout(() => {
  test('500')
}, 500);
setTimeout(() => {
  test('1200')
}, 1200);

export {}