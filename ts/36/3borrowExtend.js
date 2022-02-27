function Animail2(footer, sex, type) {
  this.footer = footer;
  this.type = type;
  this.sex = sex;
  this.logFooter = function () {
    console.log(this.footer);
  }
  this.logSex = function () {
    console.log(this.sex);
  }
}

function Dog(sex) {
  Animail2.call(this, '4', sex,'nurse');
}

Dog.prototype = new Animail2();

const xiaoHua = new Dog('weman');

xiaoHua.logFooter();
xiaoHua.logSex()


