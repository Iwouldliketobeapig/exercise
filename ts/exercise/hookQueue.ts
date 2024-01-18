type Queueu = {
  value: number;
  next: Queueu | null;
}

let firstQueue: Queueu | null = null;
let queue: Queueu | null = null;

const generateQueue = (value: number): Queueu => {
  return ({
    value,
    next: null,
  })
}

const test = () => {
  const newQueue = generateQueue(Math.random());

  if (queue === null) {
    firstQueue = queue =  newQueue
  } else {
    queue = queue.next = newQueue
  }
  return queue;
}

for(let i = 0; i < 3; i++) {
  test();
}

const testQueue = test();
console.log(firstQueue, 666666666666);
console.log(testQueue);

// [LOG]: {
//   "value": 0.38144844169741776,
//   "next": {
//     "value": 0.8044504146118436,
//     "next": {
//       "value": 0.15610939805710933,
//       "next": {
//         "value": 0.4070706973780265,
//         "next": null
//       }
//     }
//   }
// },  666666666666 
// [LOG]: {
//   "value": 0.4070706973780265,
//   "next": null
// } 
