// 动态规划楼梯，一次只能爬一步或者是两步，一共n步有多少种方案

// upstairs(n) = upstairs(n - 1) + upstirs(n - 2)

let stairsNum = [1, 1];

function upstairs(stairs: number): number {
  if (stairsNum[stairs] !== undefined) {
    return stairsNum[stairs]
  } else {
    return upstairs(stairs - 1) + upstairs(stairs - 2);
  };
}

function upstairs2(stairs: number): number {
  let starsNum2 = [1, 1];
  for (let n = 2; n <= stairs; n++) {
    starsNum2[n] = starsNum2[n - 1] + starsNum2[n - 2];
  }
  return starsNum2[stairs]
}

function upstairs3(stairs: number): number {
  let res = 1, n1 = 1, n2 = 1;
  for (let n = 2; n <= stairs; n++) {
    res = n1 + n2;
    n1 = n2;
    n2 = res;
  }
  return res;
}
console.log(upstairs(10));
console.log(upstairs2(10));
console.log(upstairs3(10));