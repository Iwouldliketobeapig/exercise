type ArrToObjFun<T extends string[]> = (args: T) => ({
  [key in keyof T as T[key] extends string ? T[key] : never]: T[key];
})

let arrToObjeFun: ArrToObjFun<string[]> = function (arr) {
  return arr.reduce((acc, ele) => ({...acc, [ele]: ele}), {})
}

const transferData = arrToObjeFun(['dutao', 'zhangwenqian']);