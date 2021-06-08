function flat(arr: Array<any>): Array<any> {
  let storeArr: any[] = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      storeArr = storeArr.concat(flat(ele));
    } else {
      storeArr.push(ele);
    }
  })
  return storeArr;
}

console.log(flat([1, 2, [3, 4, [5, 6]], [7, 8], 9]));