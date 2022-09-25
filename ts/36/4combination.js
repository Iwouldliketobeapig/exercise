function Animail3(footer, sex, type) {
  this.footer = footer;
  this.type = type;
  this.sex = sex;
}

Animail3.prototype.logFooter = function () {
  console.log(this.footer);
}

Animail3.prototype.logSex = function () {
  console.log(this.sex);
}

function Dog(sex) {
  Animail3.call(this, '4', sex,'nurse');
}

Dog.prototype = new Animail3();
Dog.prototype.constructor = Dog;

const xiaoHua = new Dog('weman');

xiaoHua.logFooter();
xiaoHua.logSex()


