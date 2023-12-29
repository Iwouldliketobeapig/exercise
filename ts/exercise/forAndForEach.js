const arr = new Array(10000000).fill(null);

const forBegin = performance.now();
for(let i = 0; i < arr.length; i++) {
  // 啥也不干
}
let forTimeConsuming = performance.now() - forBegin;

const forEachBegin = performance.now();
arr.forEach(ele => {});
let forEachTimeConsuming = performance.now() - forEachBegin;
console.log(forTimeConsuming, forEachTimeConsuming);