// 组合继承
function Animal2(colors) {
  this.colors = colors || [];
}

Animal2.prototype.getColor = function () {
  return this.colors;
}

function Dog(colors) {
  Animal2.call(this, colors); // 创建实例一次
}

Dog.prototype = new Animal2(); // 创建实例二次

const dogHuang = new Dog(['yellow']);
const dogHua = new Dog(['black', 'white']);

console.log(dogHuang.getColor(), dogHua.getColor());
// 通过打印可以发现实例和实例原形属性上都有colors
console.log(dogHuang, dogHua);
console.log(dogHuang instanceof Animal2, dogHuang instanceof Dog);
