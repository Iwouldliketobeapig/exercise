// 调度控制

function scheduler (limit: number) {
  let queue: any[] = [];
  let carried: any[] = [];
  return function (time: number, value: string) {
    const key = +new Date;
    const event = { key:　() => new Promise(resolve => {
      setTimeout(() => {
        console.log(value);
        carried = carried.filter(ele => ele.key !== key);
        if (queue.length > 0) {
          let shift = queue.shift();
          carried.push(shift);
          shift.key();
        }
        resolve(value);
      }, time)
    })}
    if (carried.length < 2) {
      carried.push(event);
      event.key();      
    } else {
      queue.push(event);
    }
  }
}

let addEvent = scheduler(2);

addEvent(2000, '2000');
addEvent(1000, '1000');
addEvent(500, '500');
addEvent(100, '100');