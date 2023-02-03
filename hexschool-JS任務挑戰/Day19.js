// 5/27(五) 每日 JS 刷題任務 - 混合題目 II
// https://hackmd.io/3czshGK_Ru6nqELzsUymdg

// 大樂透選號
// 彩球共 49 顆，分別是 1~49 號
// 新規則：執行 lotto 函式會開兩組號碼，兩組號碼不可重複
// // input 輸入
// lotto()
// lotto()

// // output  下方為範例隨機選號
// // 第一筆
// 第一組號碼：3,44,11,13,22,49，特別號是 8 號
// 第二組號碼：1,22,33,45,23,7，特別號是 12 號

// // 第二筆
// 第一組號碼：4,5,6,7,8,9，特別號是 11 號
// 第二組號碼：30,33,35,37,38,42，特別號是 49 號

//產生1~num之間的隨機整數
const randomNum = (num) => {
  return Math.floor(Math.random() * num) + 1;
};
const lotto = () => {
  let result = [];
  let random = 0;
  for (let i = 0; i < 14; i++) {
    //產生1~49當中隨機的數字
    random = randomNum(49);
    //如果在陣列中已經有這個隨機數字，重新執行一次
    if (result.indexOf(random) !== -1) {
      i--;
      continue;
      //如果沒有重複，加入陣列
    } else {
      result.push(random);
    }
  }
  const group1 = result.slice(0, 6);
  const specialNum1 = result[7];
  const group2 = result.slice(7, 13);
  const specialNum2 = result[13];
  return (
    `第一組號碼：${group1}，特別號是 ${specialNum1} 號 \n` +
    `第二組號碼：${group2}，特別號是 ${specialNum2} 號`
  );
};

console.log(lotto());
