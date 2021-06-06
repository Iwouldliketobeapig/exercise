interface Prototype {
  events: Object;
}

type Fun = (...args: any[]) => void;

class EventEmitter {
  events: {
    [prop: string]: Array<any>
  };
  constructor() {
    this.events = {};
  }

  on (type: string, callback: Fun): void {
    if (this.events[type]) {
      this.events[type].push(callback);
    } else {
      this.events[type] = [callback];
    }
  }

  emit (type: string, ...args: any[]): void {
    if (!this.events[type]) {
      return;
    }
    this.events[type].forEach(ele => ele(...args))
  }

  off (type: string, callback: Fun) {
    if (!this.events[type]) return;
    this.events[type] = this.events[type].filter(ele => callback !== ele);
  }

  once (type: string, callback: Fun) {
    const _this = this;
    function fn (...args: any) {
      callback(...args);
      _this.off(type, fn);
    }
    this.on(type, fn);
  }
}

const eventEmitter = new EventEmitter();

const onCallback: Fun = (...args) => {
  console.log(args);
}

eventEmitter.on('test', onCallback)
eventEmitter.emit('test', 1, 2, 3);
eventEmitter.emit('test', 4, 5, 6);
eventEmitter.off('test', onCallback);
eventEmitter.emit('test', 7, 8, 9);

eventEmitter.once('once', (str: string) => { console.log(str) })
eventEmitter.emit('once', 'once');
eventEmitter.emit('once', 'two');