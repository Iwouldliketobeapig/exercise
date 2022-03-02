import { Fn } from './14anti-shake';

function throttling (fn: Fn, dealy: number): Fn {
  let previous = 0;
  return (...args) => {
    const now = +new Date();
    if (now - previous > dealy) {
      fn(...args);
      previous = now;
    }  
  }
}