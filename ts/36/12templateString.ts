function render(template: string, data: any): string {
  const reg = /\{\{(\w+)\}\}/;
  if (reg.test(template)) {
    console.log(reg.exec(template));
    if (reg.exec(template) !== null) {
      const name = reg.exec(template)![1];
      template = template.replace(reg, data[name]);
      return render(template, data);
    }
  }
  return template;
}

let template = '我是{{name}}, 年龄{{age}}';

let person = {
  name: 'dutao',
  age: 12,
}
console.log(render(template, person));
