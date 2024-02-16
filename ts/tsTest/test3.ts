// SetOptional 工具类型，支持把给定的 keys 对应的属性变成可选的
type Foo = {
	a: number;
	b?: string;
	c: boolean;
}

type Simplify<T> = {
	[P in keyof T]: T[P];
}

type SetOptional<T, K extends keyof T> = 
  Simplify<Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>>

// 测试用例
type SomeOptional = SetOptional<Foo, 'a' | 'b'>;

const someOptionalTest: SomeOptional = {
	c: true,

}

// type SomeOptional = {
// 	a?: number; // 该属性已变成可选的
// 	b?: string; // 保持不变
// 	c: boolean; 
// }