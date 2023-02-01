//99乘法表
// let str = "";

// for (let i = 1; i < 10; i++) {
//   for (j = 1; j < 10; j++) {
//     if (i >= j) {
//       str += `${j} x ${i} = ${j * i}  `;
//     }
//   }
// }

// console.log(str);

//Unit1

//找出100內的所有奇數
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// FizzBuzz
// 給一個整數 n
// 請列印出 1~n 的每一個整數，
// 當整數可以被 3 整除的時候印出 Fizz 來代替原本要印出的數，
// 當整數可以被 5 整除的時候印出 Buzz 來代替原本要印出的數，
// 當整數可以被 3 跟 5 整除的時候印出 FizzBuzz 來代替原本原本要印出的數。

//寫法1
// for (let i = 1; i <= n; i++) {
//   if (i % 15 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

//比較好的寫法
// for (let i = 1; i <= n; i++) {
//   let result = "";
//   if (i % 3 === 0) {
//     result += "Fizz";
//   }
//   if (i % 5 === 0) {
//     result += "Buzz";
//   }
//   if (result.length > 0) {
//     console.log(result);
//   } else {
//     console.log(i);
//   }
// }

//找到最小值
//1.把陣列第1個元素設為最小值
//2.重複讀取陣列中每一個元素，與最小值比較
//3.如果碰到比最小值小的數字，把這個數設為最小值
//4.印出最小值
// arr = [3, 9, 2, 5, 7, 8, 1];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log(min);

//Project1作業

// 1. 字串反轉
// 給一個字串 str，請輸出 str 反過來的結果
// 範例輸入：hello
// 範例輸出：olleh
// PS. 可以用 str[i] 取得第 i 個字，例如說 str="abc"，str[0] 就是 'a'

let str = "hello";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
console.log(result);

// 2. 陣列總和
// 給一個陣列 arr，裡面全都包含了數字（整數），請輸出陣列加總的結果（總和保證不超過 int 範圍）
// 範例輸入：[1, 2, 3]
// 範例輸出：6

let arr1 = [1, 2, 3];
let total = 0;
for (let i = 0; i < arr1.length; i++) {
  total += arr1[i];
}
console.log(total);

// 3. 找最大值
// 給一個陣列 arr，裡面全都包含了數字（整數），請輸出陣列中的最大值
// 範例輸入：[1, 2, 3]
// 範例輸出：3

let arr2 = [1, 2, 3];
let max = arr2[0];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > max) {
    max = arr2[i];
  }
}
console.log(max);
