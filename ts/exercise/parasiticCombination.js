function Dog(color) {
  this.color = color;
}

Dog.prototype.printColor = function () {
  console.log(this.color);
}

function Corgi(color, name) {
  Dog.call(this, color);
  this.name = name;
}

Corgi.prototype = Object.create(Dog.prototype);
Corgi.prototype.constructor =  Corgi;
Corgi.prototype.printDetail = function () {
    console.log(this.name + ' ' + this.color);
}