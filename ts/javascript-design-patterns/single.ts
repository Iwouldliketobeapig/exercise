const getSingle = function (Constructor: any): any {
  let instance: object;
  return function (...args: any[]): object{
    if (!instance) {
      instance = new Constructor(...args);
    }
    return instance;
  }
}

// 这不是一个好的列子
class Persion {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
}

const GetSingleMan = getSingle(Persion);
const man1 = new GetSingleMan('man');
const man2 = new GetSingleMan('man');

console.log(man1 === man2);