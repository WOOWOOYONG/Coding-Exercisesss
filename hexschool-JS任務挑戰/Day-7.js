// 5/11(三) 每日 JS 刷題任務 - if 流程判斷 III
// https://hackmd.io/iceZAIX5RfW_Ui2IuOcfFw

// 題目一：有沒有打折
// 某廠商大甩賣，折扣表如下：

// 未滿 2000 無折扣
// 2000~2999 9折
// 3000~3999 8折
// 高於 4000 7折
// // input 輸入
// sale(5000)
// sale(2500)
// sale(3300)
// sale(200)
// // output 輸出
// 3500
// 2250
// 2640
// 200

function sale(price) {
  if (price < 2000) {
    console.log(price);
  } else if (price >= 2000 && price < 3000) {
    console.log(price * 0.9);
  } else if (price >= 3000 && price < 4000) {
    console.log(price * 0.8);
  } else if (price >= 4000) {
    console.log(price * 0.7);
  }
}

// 題目二：西元轉民國
// 台灣/建立時間：1912 年 1 月 1 日

// // input 輸入
// CEtoChinese(1977)
// CEtoChinese(2022)
// CEtoChinese(1666)

// // output 輸出
// "民國66年"
// "民國111年"
// "尚未建國"

function CEtoChinese(year) {
  if (year >= 1912) {
    console.log(`民國${year - 1912 + 1}年`);
  } else {
    console.log("尚未建國");
  }
}

// 題目三：年薪計算機
// 以下是梅添良軟體公司的計薪方式

// 每個月固定支薪，不幫員工保勞健保
// 三節沒禮金，也沒任何獎金
// 只有月薪、年終
// 年終計算
// 未滿一年，不會有年終
// 待超過一年的員工，年終會有 1 個月
// 待超過五年的員工，年終會有 1.3 個月
// // input 輸入
// // annualSalary(月薪,年資)
// annualSalary(10000,0.8)
// annualSalary(12000,1.5)
// annualSalary(20000,10)
// // output 輸出
// "120000"
// "156000"
// "266000"

function annualSalary(monthlyPay, tenure) {
  if (tenure < 1) {
    console.log(monthlyPay * 12);
  } else if (tenure >= 1 && tenure < 5) {
    console.log(monthlyPay * 13);
  } else {
    console.log(monthlyPay * 13.3);
  }
}
