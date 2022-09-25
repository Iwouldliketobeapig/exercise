function versionSort(versionArr: string[]): string[] {
  let dealArr = versionArr.map(ele => ele.split('.').map(ele => parseInt(ele)));
  dealArr = dealArr.filter(ele => ele.length > 2);
  let i = 2;
  while(i > 0) {
    i--;
    dealArr.sort((current, last) => last[i] - current[i]);
  }
  return dealArr.map(ele => ele.join('.'))
}

console.log(versionSort(['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'])) 