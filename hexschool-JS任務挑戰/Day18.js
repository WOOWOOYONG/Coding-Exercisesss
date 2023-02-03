//  5/26(四) 每日 JS 刷題任務 - 混合題目
//  https://hackmd.io/5wd4fS6-Q9SYMwhqRahlTA

// 題目一：陣列與物件排序
// 依照物件中每個人的分數大小做排序
// const scoreAry = [
//     {
//         name:"葉子",
//         score:99
//     },
//     {
//         name:"洧杰",
//         score:60
//     },
//     {
//         name:"卡斯伯",
//         score:80
//     }
// ];
// // input 輸入
// callAry("正序",scoreAry)
// callAry("反序",scoreAry)

// // output
// // 第一筆
// [
//     {
//         name:"洧杰",
//         score:60
//     },
//     {
//         name:"卡斯伯",
//         score:80
//     },
//     {
//         name:"葉子",
//         score:99
//     }
// ]
// // 第二筆
// [
//     {
//         name:"葉子",
//         score:99
//     },
//     {
//         name:"卡斯伯",
//         score:80
//     },
//     {
//         name:"洧杰",
//         score:60
//     },

// ]
const scoreAry = [
  {
    name: "葉子",
    score: 99,
  },
  {
    name: "洧杰",
    score: 60,
  },
  {
    name: "卡斯伯",
    score: 80,
  },
];
const callAry = (order, arr) => {
  if (order === "正序") {
    arr.sort((a, b) => {
      return a.score - b.score;
    });
  } else {
    arr.sort((a, b) => {
      return b.score - a.score;
    });
  }
  return arr;
};

console.log(callAry("正序", scoreAry));
console.log(callAry("反序", scoreAry));

// 題目二：篩選資料
// 請篩選出第一個參數，並比對 scoreAry2 看有誰達到條件
// const scoreAry2 = [
//     {
//         name:"葉子",
//         score:99
//     },
//     {
//         name:"洧杰",
//         score:60
//     },
//     {
//         name:"卡斯伯",
//         score:80
//     }
// ];

// // input 輸入
// callAry2(80)
// callAry2(99)
// callAry2(100)
// // output

// 葉子卡斯伯分數有在80分以上;
// 葉子分數有在99分以上;
// 沒有人分數在100分以上;

const scoreAry2 = [
  {
    name: "葉子",
    score: 99,
  },
  {
    name: "洧杰",
    score: 60,
  },
  {
    name: "卡斯伯",
    score: 80,
  },
];

const callAry2 = (score) => {
  let result = "";
  scoreAry2.forEach((person) => {
    if (person.score >= score) {
      result += person.name;
    }
  });
  if (result !== "") {
    return `${result}分數有在${score}分以上`;
  } else {
    return `沒有人分數在${score}分以上`;
  }
};
console.log(callAry2(80));
console.log(callAry2(99));
console.log(callAry2(100));

// 題目三：選出從零到指定數字範圍裡面的質數
// // input 輸入
// prime(13)
// prime(30)
// prime(24)
// prime(44)

// // output  請以字串來顯示
// "2,3,5,7,11"
// "2,3,5,7,11,13,17,19,23,29"
// "2,3,5,7,11,13,17,19,23"
// "2,3,5,7,11,13,17,19,23,29,31,37,41,43"

const prime = (num) => {
  let result = [];
  for (let i = 2; i < num; i++) {
    if (checkisPrime(i)) {
      result.push(i);
    }
  }
  return result.join(",");
};

const checkisPrime = (num) => {
  for (let j = 2; j < num; j++) {
    if (num % j == 0) {
      return false;
    }
  }
  return true;
};

console.log(prime(13));
console.log(prime(30));
console.log(prime(24));
console.log(prime(44));
