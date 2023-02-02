// 5/24(二) 每日 JS 刷題任務 - 從不同資料集，尋找規律性
// https://hackmd.io/59PV5IsUSoyWOvL6M9pmiQ

// 題目一：判斷是否有值
// 判斷帶入參數是否有陣列中的值
// const numAry = [1,3,4,6,8];

// // input 輸入
// checkNum(3)
// checkNum(9)
// checkNum(83)
// checkNum(6)

// // output 輸出 obj 的結果
// true
// false
// false
// true
const numAry = [1, 3, 4, 6, 8];
const checkNum = (num) => {
  for (let i = 0; i < numAry.length; i++) {
    if (num === numAry[i]) {
      return true;
    }
  }
  return false;
};

console.log(checkNum(3));
console.log(checkNum(9));
console.log(checkNum(83));
console.log(checkNum(6));

// 題目二：刪除值
// 判斷陣列是否有值，有則刪除指定資料，並回傳 deletAry 變數
// 沒有則回傳 false
// const deletAry = [1,3,4,6,8];

// // input 輸入
// delNum(3)
// delNum(9)
// delNum(83)
// delNum(6)

// // output 輸出 obj 的結果
// [1,4,6,8]
// false
// false
// [1,4,8]
const deletAry = [1, 3, 4, 6, 8];
const delNum = (num) => {
  let result = false;
  deletAry.forEach((item, index) => {
    if (item === num) {
      deletAry.splice(index, 1);
      result = true;
    }
  });
  return result ? deletAry : result;
};

console.log(delNum(3));
console.log(delNum(9));
console.log(delNum(83));
console.log(delNum(6));

// 題目三：兩個陣列尋找相同數字
// 請找出 a 與 b 陣列裡面，若有相同數值，則篩選出來成為一個陣列
// const a = [1,3,4,6,8];
// const b = [3,6,12];
// // input 輸入
// checkSame(a,b)

// // output 輸出 obj 的結果
// [3,6]
const checkSame = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }
  return result;
};

const a = [1, 3, 4, 6, 8];
const b = [3, 6, 12];
console.log(checkSame(a, b));

// 題目三 更短的寫法
// filter經過shallow copy產生一個新的陣列
// 使用includes方法決定新陣列中的元素
// 遍歷arr1的元素，若arr2有相同元素就篩選出來放入新陣列

// function checkSame(arr1, arr2) {
//   return arr1.filter(value => arr2.includes(value));
// }

// console.log(checkSame(a, b));
