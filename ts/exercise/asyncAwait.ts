// 首先async/await是Generator的语法糖
// async/await自带执行器，不需要手动调用next()就能自动执行下一步
// async函数返回Promise对象，Generator返回的时候生成器对象
// await能够返回Promise的resolve/reject的值
function *myGenerator() {
  yield Promise.resolve(1);
  yield Promise.resolve(2);
  yield Promise.resolve(3);
}

// 手动执行迭代器
// const gen = myGenerator()
// gen.next().value?.then(val => {
//   // console.log(val)
//   gen.next(val).value?.then(val => {
//     // console.log(val)
//     gen.next(val).value?.then(val => {
//       // console.log(val)
//       gen.next(val)
//     })
//   })
// })

// 自动执行
const _async = (gen: any) => {
  var it = gen();
  
  return new Promise((resolve, reject) => {
    const next = () => {
      const res = it.next();
      if (res.done) return;
      (res.value as Promise<any>).then((inRes: any) => {
        console.log(inRes)
        if(!res.done) {
          next();
        } else {
          resolve(inRes)
        }
      }, (reg) => {
        reject(reg);
      })
    }

    next();
  })
}

_async(myGenerator);

