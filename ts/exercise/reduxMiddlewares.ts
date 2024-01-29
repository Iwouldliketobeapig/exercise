function compose(...funcs: Function[]) {
  if (funcs.length === 0) {
    return (...args: any) => args
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args: any) => a(b(...args)))
}

const middlewares: Function[] = [];

const addmiddleWares = (middlewaer: Function) => {
  middlewares.push(middlewaer);
}

const middlewaerA = (next: Function) => (action: Object) => {
  console.log('middlewaerA --- begin');
  next(action);
  console.log('middlewaerA --- end');
} 

const middlewaerB = (next: Function) => (action: Object) => {
  console.log('middlewaerB --- begin');
  next(action);
  console.log('middlewaerB --- end');
}

const middlewaerC = (next: Function) => (action: Object) => {
  console.log('middlewaerC --- begin');
  next(action);
  console.log('middlewaerC --- end');
}

addmiddleWares(middlewaerA);
addmiddleWares(middlewaerB);
addmiddleWares(middlewaerC);

const testMiddleware = compose(...middlewares)(() => { console.log('begin') });

testMiddleware({ type: 'test', pyalod: 'test' });