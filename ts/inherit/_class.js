class Animal4 {
  constructor(colors) {
    this.colors = colors;
  }

  getColors () {
    return this.colors;
  }
}

class Dog extends Animal4 {
  constructor(colors) {
    super(colors);
  }
}

const dogHuang = new Dog(['yellow']);
const dogHua = new Dog(['black', 'white']);

console.log(dogHuang.getColors(), dogHua.getColors());
console.log(dogHuang, dogHua);
console.log(dogHuang instanceof Animal4, dogHuang instanceof Dog);