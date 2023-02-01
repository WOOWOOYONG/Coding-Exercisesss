// 5/17(二) 每日 JS 刷題任務 - 陣列+物件
// https://hackmd.io/6B9q4eChSO6xM6WTcxZGyA?view

// 題目一：依照文字描述物件
// 請宣告一個 family 的變數，賦予物件型別，並嘗試在裡頭加上以下資訊
// 母親叫做Mary
// 父親叫做 Bob
// 有三個孩子，分別叫做 John、Tom、Kate
// 養了五隻貓、七隻狗、八頭牛、九隻蜘蛛
// 房貸是否繳清：否

const family = {
  mother: "Mary",
  father: "Bob",
  children: ["John", "Tom", "Kate"],
  pets: {
    cat: 5,
    dog: 7,
    cow: 8,
    spider: 9,
  },
  mortgagePaid: false,
};

// 題目二：看圖設計物件
// 請宣告一個 room 的變數，賦予物件型別，盡量描述下方圖片內容，例：有多少人開會，男女比例、文具數量等等。

const room = {
  people: 5,
  male: 2,
  female: 3,
  laptop: 4,
  bigScreen: 1,
  book: 1,
};

// 題目三：擴充物件內容
// 請透過 addKeyValue 函式，來增減 obj 物件內容。
// const obj = {
//     name:"",
//     people:3
// };
// // input 輸入
// addKeyValue("name","Mike")
// addKeyValue("people",2)
// addKeyValue("people",4)

// // output 輸出
// //1
// {
//     name:"Mike",
//     people:3
// }
// //2
// {
//     name:"Mike",
//     people:5
// }
// //3
// {
//     name:"Mike",
//     people:9
// }

const obj = {
  name: "",
  people: 3,
};

function addKeyValue(key, value) {
  if (key == "name") {
    obj[key] = value;
  } else if (key == "people") {
    obj[key] += value;
  }
}

// 題目四：進階題，不適合新手
// 請宣告一個 obj 函式，並用obj()[2]()方式執行，並會 return 回傳 “hi”

// obj()[2]()
// 1. 呼叫obj函式 return 一個陣列
// 2. 抓出陣列中index=2的元素
// 3. 執行此元素 會是一個function並return 'hi'

// // output 輸出
// "hi"

function obj1() {
  return [
    1,
    2,
    function () {
      return "hi";
    },
  ];
}
