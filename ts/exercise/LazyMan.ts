class _LazyMan {

  meal?: string[]
  sleepDealy?: number;
  sleepFirstDealy?: number;
  tasks: any[];

  constructor (name: string) {
    this.tasks = [];
    this.tasks.push(() => {
      console.log(`Hi! this is ${name}`);
      this.next();
    })
    setTimeout(() => this.next(), 0)
  }

  next = () => {
    const task = this.tasks.shift();
    task && task();
  }

  sleepFirst = (dealy: number): _LazyMan => {
    this._sleepWrapper(dealy, true);
    return this;
  }

  sleep = (dealy: number): _LazyMan => {
    this._sleepWrapper(dealy, false);
    return this
  }

  _sleepWrapper = (time: number, first: boolean) => {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000)
    }
    if (first) {
      this.tasks.unshift(task);
    } else {
      this.tasks.push(task);
    }
  }

  eat = (meal: string): _LazyMan => {
    this.tasks.push(() => {
      console.log(`Eat ${meal}`);
      this.next();
    });
    return this
  }

}

function LazyMan (name: string) {
  return new _LazyMan(name);
}

LazyMan('Hank');

LazyMan('Hank').sleep(10).eat('dinner');

LazyMan('Hank').eat('dinner').eat('supper');

LazyMan('Hank').eat('supper').sleepFirst(5);