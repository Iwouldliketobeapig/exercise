// 寄生继承，据说是一种比较完美的方案
function Animal3(colors) {
  this.colors = colors || [];
}

Animal3.prototype.getColor = function () {
  return this.colors;
}

const Super = function () {};
Super.prototype = Animal3.prototype;

function Dog (colors) {
  Animal3.call(this, colors);
}

Dog.prototype = new Super();
Dog.prototype.constructor = Animal3;

const dogHuang = new Dog(['yellow']);
const dogHua = new Dog(['black', 'white']);

console.log(dogHuang.getColor(), dogHua.getColor());
console.log(dogHuang, dogHua);
console.log(dogHuang instanceof Animal3, dogHuang instanceof Dog);

function Cat (colors) {
  Animal3.call(this, colors);
}

Cat.prototype = Object.create(Animal3.prototype);

const catHuang = new Cat(['yellow']);
const catHua = new Cat(['black', 'white']);

console.log(catHuang.getColor(), catHua.getColor());
console.log(catHuang, catHua);
console.log(catHuang instanceof Animal3, catHuang instanceof Cat);
