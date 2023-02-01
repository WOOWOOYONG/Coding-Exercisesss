// 5/12(四) 每日 JS 刷題任務 - 字串再複習
// https://hackmd.io/495ohZnOSGOPUq33qPNynw

// 題目一：字串輸出
// // input 輸入
// callString("apple")
// callString("banner")
// callString("qqq")

// // output 輸出
// "a-p-p-l-e"
// "b-a-n-n-e-r"
// "q-q-q"

function callString(string) {
  return string.split("").join("-");
}

console.log(callString("apple"));
console.log(callString("banner"));
console.log(callString("qqq"));

// 題目二：字串數量
// 若大於五個字元，請只顯示前兩個字
// // input 輸入
// checkFiveWord("hello")
// checkFiveWord("hi~")
// checkFiveWord("Jackson")

// // output 輸出
// "he"
// "hi~"
// "Ja"

function checkFiveWord(str) {
  if (str.length >= 5) {
    return str[0] + str[1];
  } else {
    return str;
  }
}

console.log(checkFiveWord("hello"));
console.log(checkFiveWord("hi~"));
console.log(checkFiveWord("Jackson"));

// 題目三：函式強制正整數相乘
// // input 輸入
// multiply(2,3)
// multiply(1,3,5)
// multiply(7,7,7,7,7)
// multiply(5,3,-2)
// multiply(4)
// // output 輸出
// 6
// 15
// 16807
// 30
// 4

function multiply(...num) {
  let total = 1;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
      total *= num[i];
    } else {
      total *= num[i] * -1;
    }
  }
  return total;
}

console.log(multiply(2, 3));
console.log(multiply(1, 3, 5));
console.log(multiply(7, 7, 7, 7, 7));
console.log(multiply(5, 3, -2));
console.log(multiply(4));
