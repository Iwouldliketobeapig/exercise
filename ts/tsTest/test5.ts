type Fn = (a: number, b: string) => number
type AppendArgument<F extends Fun, A> = (x: A, ...args: Parameters<F> ) => ReturnType<F> // 你的实现代码
type AppendArgument1<F, T> = F extends (...args: infer Args) => infer Return ? (x: T, ...args: Args) => Return : never;

type FinalFn = AppendArgument<Fn, boolean> 
// (x: boolean, a: number, b: string) => number

type NaiveFlat<T extends any[]> =  // 你的实现代码

// 测试用例：
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>
// NaiveResult的结果： "a" | "b" | "c" | "d"
