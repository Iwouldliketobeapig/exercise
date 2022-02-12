// 原型链继承
function Animal() {
  this.colors = ['red', 'black'];
}

Animal.prototype.getColor = function () {
  return this.colors;
}

function Dogs() {}

Dogs.prototype = new Animal();

var xiaoHUange = new Dogs();
xiaoHUange.colors.push('blue');
var dogBai = new Dogs();
// 缺点，Dogs的所有实例共享属性
console.log(xiaoHUange.getColor()); // ['red', 'black', 'blue']
console.log(dogBai.getColor()); // ['red', 'black', 'blue'] 

console.log(xiaoHUange instanceof Animal, xiaoHUange instanceof Dogs)

function Cats() {}
Cats.prototype = new Animal();
var huahua = new Cats();
console.log(huahua.getColor());
