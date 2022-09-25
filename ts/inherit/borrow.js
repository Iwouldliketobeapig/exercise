// 借用继承
function Animal1(colors) {
  this.colors = colors || [];
  this.getColor = function () {
    return this.colors;
  }
}

function Dogs (colors) {
  Animal1.call(this, colors);
}

const dogHuang = new Dogs(['white']);
const dogHua = new Dogs(['white', 'black']);

console.log(dogHuang.getColor())
console.log(dogHua.getColor())
// 解决了原型链继承实例共享数据问题，但是类似getColor可复用但是每个实例都会被创建
console.log(dogHuang);
console.log(dogHua);

