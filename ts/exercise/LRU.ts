class Lru<K, V> {
  lryMap: Map<K, V>;
  keys: K[];
  capacity: number;

  constructor(capacity: number) {
    this.keys = [];
    this.capacity = capacity;
    this.lryMap = new Map();
  }

  put = (key: K, value: V): void => {
    const keyIndex = this.keys.indexOf(key);
    if (keyIndex > -1) {
      this.keys.splice(keyIndex, 1);
    } 
    this.keys.push(key);
    if (this.keys.length > this.capacity) {
      const removeKey = this.keys.shift();
      this.lryMap.delete(removeKey as K);
    }
    this.lryMap.set(key, value);
    console.log(this.keys, this.lryMap);
  }

  get = (key: K): V | number => {
    return this.lryMap.get(key) || -1;
  }
}

const testLru = new Lru(3);
console.log(testLru.put(1, 1))
console.log(testLru.get(1));
console.log(testLru.put(2, 2));
console.log(testLru.put(3, 3));
console.log(testLru.put(4, 4));
console.log(testLru.put(5, 5));
console.log(testLru.get(1));
console.log(testLru.get(2));
console.log(testLru.put(3, 3));
console.log(testLru.get(3));