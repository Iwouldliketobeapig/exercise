export interface ObjectKey {
  [key: string]: any
}

function judgeType(target: any): string {
  return Object.prototype.toString.call(target).slice(8, -1);
}

function deepClone(obj: ObjectKey): ObjectKey {
  const result: ObjectKey = {};
  const noDeep = new Set(['string', 'undefined', 'null', 'number']);
  for (let key in obj) {
    const val = obj[key];
    const valType = judgeType(val);
    if (noDeep.has(valType)) {
      result[key] = val;
    } else if (valType === 'object') {
      {
        result[key] = deepClone(val);
      }
    } else if (valType === 'array') {
      result[key] = val.map((ele: any) => deepClone(ele))
    } else if (valType === 'function') {
      result[key] = eval(val.toString());
    }
  }
  return result;
}