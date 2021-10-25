/**
 * 题目描述
 * let template = '我是{{name}}, 年龄{{age}}, 性别{{sex}}'
 * let data = {
 *   name: '姓名',
 *   age: 18
 * }
 * parse(template, data); // 我是姓名，年龄18，性别undefined
 */
interface Idata {
  name: string;
  age: number;
  sex?: string;
}


function parse(template: string, data: Idata): string {
  let computed = template.replace(/\{\{(\w+)\}\}/g, function <K extends keyof Idata>(match, key: K) {
    return data[key] as string
  })
  return computed
}