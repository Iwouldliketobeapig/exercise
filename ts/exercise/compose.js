export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

function add (num) {
  console.log(num, 123)
  return num + num;
}

function less (num) {
  console.log(num, 234)
  return num - 1;
}

function pow2 (num) {
  console.log(num, 345)
  return num * num;
}

console.log(compose(add, less, pow2)(12));