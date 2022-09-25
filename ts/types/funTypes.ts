export type ArbitaryFun = (...args: any[] | never) => any | void;

export type arrSortFun = (arr: number[]) => number[];

export type anyObject = {
  [name: string]: any
}