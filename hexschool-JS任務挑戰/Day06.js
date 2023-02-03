// 5/10(二) 每日 JS 刷題任務 - if 流程判斷 II
// https://hackmd.io/OqrwGni1QhC9j-xTAusJ0Q

// 題目一：日幣計算機 (1:0.32)
// // input 輸入
// TWDtoJPY(-1)
// TWDtoJPY("hi~")
// TWDtoJPY(2000)
// TWDtoJPY(320)
// // output 輸出
// "...沒錢別來亂"
// "當我看不懂字串？？"
// "你換到的日幣有：6250"
// "你換到的日幣有：1000"

function TWDtoJPY(num) {
  if (num < 0) {
    console.log("...沒錢別來亂");
  } else if (typeof num == "string") {
    console.log("當我看不懂字串？？");
  } else {
    console.log(`你換到的日幣有：${Math.round(num / 0.32)}`);
  }
}

// 題目二：匯率計算機
// 美金：1:29
// 港幣：1:3
// 英鎊：1:35
// // input 輸入
// TWDtoAnother(100,"USD")
// TWDtoAnother(100,"Sword Art Online")
// TWDtoAnother(100,"HKD")
// TWDtoAnother(100,"GBP")

// // output 輸出
// "2900"
// "..."
// "300"
// "3500"
function TWDtoAnother(twd, currency) {
  if (currency == "USD") {
    console.log(twd * 29);
  } else if (currency == "HKD") {
    console.log(twd * 3);
  } else if (currency == "GBP") {
    console.log(twd * 35);
  } else {
    console.log("...");
  }
}

// 題目三：BMI 計算機
// // input 輸入
// // BMI(身高(公尺),體重（公斤))
// BMI = 體重(公斤) / 身高^2(公尺^2)
// // output 輸出
// "正常"
// "重度肥胖"
// "中度肥胖"
// "輕度肥胖"
// "過重"
// "過輕"
function BMI(height, weight) {
  const bmi = (weight / height ** 2).toFixed(2);
  if (bmi < 18.5) {
    console.log("過輕");
  } else if (bmi >= 18.5 && bmi < 24) {
    console.log("正常");
  } else if (bmi >= 24 && bmi < 27) {
    console.log("過重");
  } else if (bmi >= 27 && bmi < 30) {
    console.log("輕度肥胖");
  } else if (bmi >= 30 && bmi < 35) {
    console.log("中度肥胖");
  } else if (bmi >= 35) {
    console.log("重度肥胖");
  }
}

// 字串切割+if
// 如果第一個數字是質數，請將第二、三個數字加總
// 如果第一個數字是偶數，請將第二、三個數字相減
// 如果第一個數字不是質數也不是偶數，請將第二、三個數字相乘
// // input 輸入
// sum("13,20,10")
// sum("10,2,3")
// sum("9,5,7")
// // output 輸出
// 30
// -1
// 35

//判斷是否為質數
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function sum(numbers) {
  let arr = numbers.split(",");
  let numArr = arr.map((num) => {
    return parseInt(num, 10);
  });
  if (numArr[0] % 2 == 0) {
    console.log(numArr[1] - numArr[2]);
  } else if (isPrime(numArr[0])) {
    console.log(numArr[1] + numArr[2]);
  } else {
    console.log(numArr[1] * numArr[2]);
  }
}
