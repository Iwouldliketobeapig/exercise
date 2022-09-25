const arr = [
  {
    id: 2,
    name: "部门B",
    parentId: 0,
  },
  {
    id: 3,
    name: "部门C",
    parentId: 1,
  },
  {
    id: 1,
    name: "部门A",
    parentId: 2,
  },
  {
    id: 4,
    name: "部门D",
    parentId: 1,
  },
  {
    id: 5,
    name: "部门E",
    parentId: 2,
  },
  {
    id: 6,
    name: "部门F",
    parentId: 3,
  },
  {
    id: 7,
    name: "部门G",
    parentId: 2,
  },
  {
    id: 8,
    name: "部门H",
    parentId: 4,
  },
];

interface Item {
  id: number;
  name: string;
  parentId: number;
}

interface Tree extends Item {
  children?: Item[];
}

function arrToTree(arr: Item[]): Tree | null {
  let result: null | Item = null;
  let arrObj: { [key: number]: Tree } = {};
  arr.forEach((ele) => {
    if (ele.parentId === 0) {
      result = ele;
    }
    arrObj[ele.id] = ele;
  });
  console.log(arrObj);
  for (let i = 0; i < arr.length; i++) {
    if (arrObj[arr[i].parentId]) {
      let children = arrObj[arr[i].parentId].children;
      arrObj[arr[i].parentId].children = children ? children.concat(arr[i]) : [arr[i]];
    }
  }
  return result;
}

console.log(arrToTree(arr));
