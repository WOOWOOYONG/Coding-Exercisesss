// 5/3(二) 每日 JS 刷題、任務 - 字串、數字相加
// https://hackmd.io/HiPIaZgARsGSNbGNWeQeNw

// 題目一：hello world！
// // input 輸入
// hello()
// hello()

// // output 輸出
// "Hello world！"
// "Hello world！"
function hello() {
  console.log("Hello world");
}

// 題目二：參數+字串練習
// // input 輸入
// sayHi("Tom")
// sayHi("John")

// // output 輸出
// "Tom，Hello world！"
// "John，Hello world！"
function sayHi(name) {
  console.log(`${name}，Hellow world！`);
}

// 題目三：參數加法產生器
// input 輸入
// add(2)
// add(4)
// add(8)

// // output 輸出
// 4
// 8
// 16

function add(num) {
  console.log(num * 2);
}

// 題目四：兩個參數相加器
// // input 輸入
// addTwo(5,10)
// addTwo(4,20)
// addTwo(9,100)

// // output 輸出
// 15
// 24
// 109

function addTwo(a, b) {
  console.log(a + b);
}

// 題目五：參數+字串相加
// // input 輸入
// addNumberAndString(5,10,30)
// addNumberAndString(4,20,22)
// addNumberAndString(9,100,44)

// // output 輸出
// "第一加第二個參數加總為 15，第三個參數為 30"
// "第一加第二個參數加總為 24，第三個參數為 22"
// "第一加第二個參數加總為 109，第三個參數為 44"

function addNumberAndString(a, b, c) {
  console.log(`第一加第二個參數加總為 ${a + b}，第三個參數為 ${c}`);
}
