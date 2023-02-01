// 5/18(三) 每日 JS 刷題任務 - 混合題
// https://hackmd.io/j3FKi94yR6SY2SA4XgC1Hg

// 題目一：星星顯示
// // input 輸入
// createStar(1)
// createStar(3)
// createStar(5)
// // output 輸出
// "*"
// "***"
// "*****"

function createStar(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += "*";
  }
  return result;
}

// 題目二：反轉陣列
// // input 輸入
// reverseAry([7,8,9])
// reverseAry(["black","white","red"])
// reverseAry([{name:"mike"},{name:"John"}])
// // output 輸出
// [9,8,7]
// ["red","white","black"]
// [{name:"John"},{name:"mike"}]

function reverseAry(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

console.log(reverseAry([7, 8, 9]));
console.log(reverseAry(["black", "white", "red"]));
console.log(reverseAry([{ name: "mike" }, { name: "John" }]));

// 題目三：陣列轉字串
// // input 輸入
// aryToString([7,8,9])
// aryToString(["black","white","red"])
// aryToString([true,false,true])
// // output 輸出
// "9,8,7"
// "red,white,black"
// "true,false,true"

function aryToString(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result.join(",");
}

console.log(aryToString([7, 8, 9]));
console.log(aryToString(["black", "white", "red"]));
console.log(aryToString([true, false, true]));

// 題目四：進階題，不適合新手：雙 for 迴圈
// // input 輸入
// multiplication(3)
// multiplication(5)
// // output 輸出 為字串格式
// //  multiplication(3)
// 2x1=2
// 2x2=4
// 3x1=3
// 3x2=6
// 3x3=9

// //  multiplication(5)
// 2x1=2
// 2x2=4
// 3x1=3
// 3x2=6
// 3x3=9
// 4x1=4
// 4x2=8
// 4x3=12
// 4x4=16
// 5x1=5
// 5x2=10
// 5x3=15
// 5x4=20
// 5x5=25

function multiplication(num) {
  let result = "";
  for (let i = 2; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      result = `${i}x${j}=${i * j}`;
      console.log(result);
    }
  }
}

console.log(multiplication(3));
