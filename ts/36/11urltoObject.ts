type TParsePara = {
  [key: string]: String;
}

function parseParam(url: string): TParsePara {
  const result = {};
  const paramsStr = url.split('?')[1];
  if (paramsStr) {
    paramsStr.split('&').map(ele => {
      return ele.split('=')
    }).forEach(ele => {
      result[ele[0]] = ele[1];
    })
  }
  return result;
}