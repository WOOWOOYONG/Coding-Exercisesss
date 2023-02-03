// 5/6(五) 每日 JS 刷題任務 - 比較與邏輯運算子
// https://hackmd.io/um5y80pmS3yt51mryvOHtw

// 題目一：比大小
// // input 輸入
// higher(3,2)
// higher(100,299)
// higher(8,2.5)
// // output 輸出
// true
// false
// true
function higher(a, b) {
  a > b ? console.log(true) : console.log(false);
}

// 題目二：布林反轉

// // input 輸入
// booleanToggle(true)
// booleanToggle(false)
// // output 輸出
// false
// true

function booleanToggle(boolean) {
  boolean ? console.log(false) : console.log(true);
}

// 題目三：型別判斷
// // input 輸入
// checkType(3.33)
// checkType("Hello")
// checkType(true)
// checkType([1,2,3])
// // output 輸出
// "number"
// "string"
// "boolean"
// "object"

function checkType(input) {
  return console.log(typeof input);
}

// 題目四：打八折後，是否總價大於 100 元
// // input 輸入
// onSale(200)
// onSale(150)
// onSale(125)
// onSale(100)
// // output 輸出
// true
// true
// false
// false

function onSale(price) {
  price * 0.8 > 100 ? console.log(true) : console.log(false);
}

// 題目五：是否大於 200，且符合會員條件
// // input 輸入
// checkVIP(300,true)
// checkVIP(0,true)
// checkVIP(30000,false)
// checkVIP(888,true)
// // output 輸出
// true
// false
// false
// true

function checkVIP(num, isVip) {
  num > 200 && isVip ? console.log(true) : console.log(false);
}
