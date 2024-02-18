// 将中缀表达式转为前缀表达式
// 1. 如果是number就处理number
// 2. 如果是左括号就将左括号推到符号栈里面
// 3. 如果是右括号，就一直取出知道遇到左括号，并推到result中
// 4. 如果遇到高优先级算法，就将前面的所有算法取出并推入到result中，直到遇到左括号或者到顶
// 5. 如果遇到低优先级算法，就将前面的所有同级算法取出并推到result中，直到遇到左括号或者到顶
function transfer (judgeStr: string): (string | number | void)[] {
  let result = [];
  let curNum = 0;
  let symbolStack = [];
  let allComputes = ['*', '/', '+', '-', '(', ')'];
  let highComputes = new Set(['*', '/']) ;
  for (let i = 0; i < judgeStr.length; i++) {
    const current = judgeStr[i];
    if (isNaN(Number(current))) {
      if (i !== 0 && !allComputes.includes(judgeStr[i - 1])) {
        result.push(curNum);
      }
      curNum = 0;
      if (current === '(') {
        symbolStack.push(current);
      } else if (current === ')') {
        while(symbolStack.length) {
          let symbolStackPop = symbolStack.pop();
          if (symbolStackPop !== '(') {
            result.push(symbolStackPop);
          } else {
            break;
          }
        }
      } else if (highComputes.has(current)) {
        while(symbolStack.length) {
          let last = symbolStack[symbolStack.length - 1];
          if (last === '(') {
            break;
          } else if (highComputes.has(last)) {
            result.push(symbolStack.pop());
          } else {
            break;
          }
        }
        symbolStack.push(current)
      } else {
        while (symbolStack.length) {
          let last = symbolStack[symbolStack.length - 1];
          if (last === '(') {
            break;
          } else {
            result.push(symbolStack.pop());
          }
        }
        symbolStack.push(current)
      }
    } else {
      curNum = curNum * 10 + Number(current);
      if (i === judgeStr.length - 1) {
        result.push(curNum)
      }
    }
  }

  while (symbolStack.length) {
    result.push(symbolStack.pop());
  }

  console.log(result);
  return result;
}

transfer('1+2');
transfer('1+2*10');
transfer('1+2*10-3');
transfer('(1+2)*10-3');