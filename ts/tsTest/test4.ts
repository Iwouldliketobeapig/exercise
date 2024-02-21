interface Example {
	a: string;
	b: string | number;
	c: () => void;
	d: {};
}

// 

type ConditionalPick<T, S> = {
  [key in keyof T as (T[key] extends S ? key : never)]: T[key];
}

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>;
//=> {a: string}