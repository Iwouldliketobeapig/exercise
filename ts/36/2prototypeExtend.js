function Animail1(footer, type) {
  this.footer = footer;
  this.type = type;
}

Animail1.prototype.logFooter = function () {
  console.log(this.footer);
}

function Dog(name) {
  this.name = name;
}

Dog.prototype = new Animail1(4, 'nurse');

Dog.prototype.logName = function () {
 console.log(this.name);
}

Dog.prototype.constructor = Dog;

const daHuang = new Dog('daHuang');

daHuang.logFooter();
daHuang.logName();
console.log(daHuang instanceof Dog);
console.log(daHuang instanceof Animail1);
console.log(daHuang.constructor);