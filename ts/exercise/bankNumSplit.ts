const bankNumSplit = (num: number): string => {
  const numStr = num + '';
  const [interge, fractional] = numStr.split('.');
  let intergeRes = '';
  // 处理整数部分
  if (interge) {
    let count = 2;
    for (let i = interge.length - 1; i >= 0; i--) {
      if (count === 0) {
        intergeRes = ',' + interge[i] + intergeRes;
        count = 3;
      }  else {
        intergeRes = interge[i] + intergeRes;
        count--
      }
    }
  }
  if (fractional) {
    return intergeRes + '.' + fractional
  } else {
    return intergeRes;
  }
}

console.log(bankNumSplit(1231212314.23))
console.log(bankNumSplit(123121.23)) 