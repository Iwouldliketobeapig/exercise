// 储存一个排队序列
// 可以控制最大执行数量

class ExecutionQueue {
    maxExecution: number;
    doing: Function[] = [];
    queue: Function[] = [];

    constructor(maxExecution: number) {
        this.maxExecution = maxExecution;
    }

    callback(fun: Function) {
        const test = this.doing.splice(this.doing.indexOf(fun), 1);
        if (this.queue.length) {
            const currentFun = this.queue.shift()!;
            this.doing.push(currentFun);
            currentFun(() => this.callback(currentFun));
        }
    }

    add(fun: Function) {
        this.queue.push(fun);
        if (this.doing.length < this.maxExecution) {
            const currentFun = this.queue.shift()!;
            this.doing.push(currentFun);
            currentFun(() => this.callback(currentFun));
        }
    }
}

const executionQueue = new ExecutionQueue(2);

executionQueue.add((callback: Function) => {
    setTimeout(() => { callback(), console.log('这是在5000'); }, 5000)
})

executionQueue.add((callback: Function) => {
    setTimeout(() => { callback(); console.log('这是2000的') }, 2000)
})

executionQueue.add((callback: Function) => {
    setTimeout(() => { callback(); console.log('这是1000的----------') }, 1000)
})