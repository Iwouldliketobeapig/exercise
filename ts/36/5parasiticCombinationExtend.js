function Animail4(footer, sex, type) {
  this.footer = footer;
  this.type = type;
  this.sex = sex;
}

Animail4.prototype.logFooter = function () {
  console.log(this.footer);
}

Animail4.prototype.logSex = function () {
  console.log(this.sex);
}

function Parasitic () {}

Parasitic.prototype = Animail4.prototype;

function Dog(sex) {
  Animail4.call(this, '4', sex,'nurse');
}
// Dog.prototype = new Parasitic();
Dog.prototype = Object.create(Animail4.prototype);

const xiaoHua = new Dog('weman');

xiaoHua.logFooter();
xiaoHua.logSex()

