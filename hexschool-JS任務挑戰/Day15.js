//  5/23(一) 每日 JS 刷題任務 - 陣列物件資料處理
//  https://hackmd.io/lumPURHFQKStQ_LLpfAzTg

// 題目一：物件加值
// 請透過 addContent 函式，來增減 obj 物件內容。
// const obj = {
//     sons:[]
// }
// // input 輸入
// addContent("Bob")
// addContent("Tom")

// // output 輸出 obj 的結果
// {
//     sons:["Bob"]
// }

// {
//     sons:["Bob","Tom"]
// }

const obj = {
  sons: [],
};
const addContent = (input) => {
  obj.sons.push(input);
  return obj;
};

console.log(addContent("Bob"));
console.log(addContent("Tom"));

// 題目二：
// 請透過 addContent2 函式，來增減 obj2 陣列內容。
// const obj2 = []
// // input 輸入
// addContent2("Bob")
// addContent2("Tom")

// // output 輸出 obj2 的結果
// [
//     {name:"Bob"}
// ]

// [
//     {name:"Bob"},
//     {name:"Tom"},
// ]

const obj2 = [];
const addContent2 = (input) => {
  const item = {};
  item.name = input;
  obj2.push(item);
  return obj2;
};

console.log(addContent2("Bob"));
console.log(addContent2("Tom"));

// 題目三：
// 請透過 addContent3 函式，來增加 obj3 物件內容。
// const obj3 = {
//     male:0,
//     female:0
// }
// // input 輸入
// addContent3("male")
// addContent3("male")
// addContent3("female")
// // output 輸出 obj3 的結果
// {
//     male:1,
//     female:0
// }

// {
//     male:2,
//     female:0
// }

// {
//     male:2,
//     female:1
// }

const obj3 = {
  male: 0,
  female: 0,
};
const addContent3 = (input) => {
  obj3[input] += 1;
  return obj3;
};

console.log(addContent3("male"));
console.log(addContent3("male"));
console.log(addContent3("female"));
