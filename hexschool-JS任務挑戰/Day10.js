// 5/16(一) 每日 JS 刷題任務 - 陣列設計
// https://hackmd.io/hjZC5N4rQCm50-I6JTXMCw?view

// 題目一：陣列長度計算
// // input 輸入
// checkLength([1,2,3])
// checkLength([5,8,39,1,2,3])
// checkLength([])

// // output 輸出
// 3
// 6
// 0

function checkLength(arr) {
  return arr.length;
}

// 題目二：增減陣列內容
// 請透過 aryControl 函式，來增減 ary 陣列內容。
// const ary = [];
// // input 輸入
// aryControl("增加","black")
// aryControl("增加","red")
// aryControl("增加","white")
// aryControl("增加","blue")
// aryControl("刪除指定筆數",3)
// aryControl("刪除指定筆數",1)

// // output 輸出
// ["black"]
// ["red","black"]
// ["white","red","black"]
// ["blue","white","red","black"]
// ["blue","white","black"]
// ["white","black"]

const ary = [];
function aryControl(act, item) {
  if (act == "增加") {
    ary.unshift(item);
  } else if (act == "刪除指定筆數") {
    ary.splice(item - 1, 1);
  }
}

// 題目三：for+陣列相加產生器，邏輯思考題
// 請嘗試用 numAry 變數，並搭配 addAry 函式來解此題目
// const numAry = [1,2,3,4,5]
// // input 輸入
// addAry(1);
// addAry(2);
// addAry(3);
// addAry(4);
// addAry(5);
// // output 輸出
// 1
// 3
// 6
// 10
// 15

const numAry = [1, 2, 3, 4, 5];
function addAry(num) {
  let result = 0;
  for (let i = 0; i < num; i++) {
    result += numAry[i];
  }
  return result;
}
