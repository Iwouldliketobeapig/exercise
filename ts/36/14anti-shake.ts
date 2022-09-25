export type Fn = (...args: any[]) => any | void;

function antiShake(fn: Fn, dealy: number): Fn {
  const _this = this;
  let timer: null | ReturnType<typeof setTimeout> = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(_this, ...args)
    }, dealy)
  }
}