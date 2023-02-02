//  5/25(三) 每日 JS 刷題任務 - 陣列操作
//  https://hackmd.io/l61mQS_PRo26SwFgYt9LwA?view

// 題目一：陣列索引
// 陣列索引，點出是第幾筆資料
// const numAry = [1,3,4,6,8];

// // input 輸入
// checkNum(3)
// checkNum(9)
// checkNum(83)
// checkNum(6)

// // output
// 位置在第2筆
// false
// false
// 位置在第4筆
const numAry = [1, 3, 4, 6, 8];
const checkNum = (num) => {
  for (let i = 0; i < numAry.length; i++) {
    if (num === numAry[i]) {
      return `位置在第${i + 1}筆`;
    }
  }
  return false;
};

// 題目二：陣列相乘
// 將陣列裡面的各個陣列數字相乘
// const doubleAry = [
//     [1,2,3],
//     [3,5,6],
//     [2,2,2,2],
// ];

// // input 輸入
// callAry(doubleAry)

// // output
// "第1個陣列相乘是6，第2個陣列相乘是90，第3個陣列相乘是16"
const callAry = (inputAry) => {
  let result = [];
  for (let i = 0; i < inputAry.length; i++) {
    let output = 1;
    inputAry[i].forEach((num) => {
      output *= num;
    });
    result.push(`第${i + 1}個陣列相乘是${output}`);
  }
  return result.join("，");
};

const doubleAry = [
  [1, 2, 3],
  [3, 5, 6],
  [2, 2, 2, 2],
];
console.log(callAry(doubleAry));

// 題目三：陣列排序
// 正序、反序設計
// const a = [1,3,4,6,8];
// const b = [3,6,12];
// // input 輸入
// sortAry("從小到大",[8,3,1,7])
// sortAry("從小到大",[99,22,11,33])
// sortAry("從大到小",[7,2,33,4])

// // output
// [1,3,7,8]
// [11,22,33,99]
// [33,7,4,2]

const sortAry = (order, arr) => {
  if (order === "從小到大") {
    arr.sort(function (a, b) {
      return a - b;
    });
  } else if (order === "從大到小") {
    arr.sort(function (a, b) {
      return b - a;
    });
  }
  return arr;
};

console.log(sortAry("從小到大", [8, 3, 1, 7]));
console.log(sortAry("從小到大", [99, 22, 11, 33]));
console.log(sortAry("從大到小", [7, 2, 33, 4]));

const animals = ["cat", "chicken", "monkey"];
animals.sort((a, b) => {
  return 1;
});
console.log(animals); // ['cat','monkey','chicken']
