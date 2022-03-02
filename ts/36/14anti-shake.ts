export type Fn = (...args: any[]) => any | void;

function antiShake (fn: Fn, dealy: number): Fn {
  let timer: null | ReturnType<typeof setTimeout> = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    } else {
      timer = setTimeout(() => {
        fn(...args)
      }, dealy)
    }
  }
}