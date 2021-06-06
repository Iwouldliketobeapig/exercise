type Doge = {
  name: string;
}

type Cat = {
  age: Number
}

type Animail = Doge & Cat;

const wangcai: Animail = {
  name: 'wangcai',
  age: 12,
}