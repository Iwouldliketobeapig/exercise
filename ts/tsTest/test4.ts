interface Example {
	a: string;
	b: string | number;
	c: () => void;
	d: {};
}

// 

type ConditionalPick<T, S> = {
  [K in keyof T as T[K] extends S ? K : never]: T[K];
}

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>;
//=> {a: string}