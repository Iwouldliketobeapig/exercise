// 规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只能有一次能生效。

type Fun1 = (...args: any[] | never) => any | void;
type Fun2 = (str: string) => void;

function throttling (callback: Fun1, delay: number): Fun2 {
  let timeId: any;
  return str => {
    if (timeId) return;
    timeId = setTimeout(() => {
      timeId = null;
      callback(str);
    }, delay);
  }
}

function print (str: string): void {
  console.log(str);
}

const test = throttling(print, 1000);
test('asdas');
test('123123')
setTimeout(() => {
  test('2000')
}, 2000)

export { Fun1, Fun2 }