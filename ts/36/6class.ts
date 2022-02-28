class Animail6 {
  footer: number;
  sex: string;
  type: string;
  constructor(footer: number, sex: string, type: string) {
    this.footer = footer;
    this.sex = sex;
    this.type = type;
  }

  logFooter() {
    console.log(this.footer);
  }

  logSex() {
    console.log(this.sex);
  }
}

class Dog6 extends Animail6 {
  name: string;
  constructor(sex: string, name: string) {
    super(4, sex, 'nurse');
    this.name = name;
  }

  logName () {
    console.log(this.name);
  }
}

const xiaoHuang = new Dog6('weman', 'xiaoHuang');

xiaoHuang.logName();
xiaoHuang.logFooter();
xiaoHuang.logSex()
