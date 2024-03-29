import { ObjectKey } from './9deepClone';

type TFun = (...args: any[]) => any

class EventBus {
  state: Record<string, any>;

  constructor() {
    this.state = {};
  }

  // 监听事件
  on(event: string, fn: TFun) {
    if (this.state[event]) {
      this.state[event].push(fn)
    } else {
      this.state[event] = [fn];
    }
  }

  // 移出监听事件
  off(event: string, fn: TFun) {
    if (this.state[event]) {
      const index = this.state[event].indexOf(fn);
      if (index !== -1) {
        this.state[event].splice(index, 1);
      }
    }
  }

  // 触发事件
  emit(event: string, ...args: any[]) {
    const evnets = this.state[event];
    if (evnets) {
      for (let val of evnets) {
        val(...args);
      }
    }
  }
}

let eventBus = new EventBus();
let fn1 = function (name: string, age: string) {
  console.log(name + age)
}
let fn2 = function (name: string, age: string) {
  console.log(name + age + 'hellp')
}

eventBus.on('test', fn1);
eventBus.on('test', fn2);
eventBus.emit('test', 'dutao', '29');
eventBus.off('test', fn1);
eventBus.emit('test', 'dutao', '30');