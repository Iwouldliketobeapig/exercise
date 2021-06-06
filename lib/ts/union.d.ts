declare type Doge = {
    name: string;
};
declare type Cat = {
    age: Number;
};
declare type Animail = Doge & Cat;
declare const wangcai: Animail;
