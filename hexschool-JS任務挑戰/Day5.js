//5/9(一) 每日 JS 刷題任務 - if 流程判斷 I
// https://hackmd.io/QB2vnGBjTYOha2-K2oDO4Q

// 題目一：成年計算機
// // input 輸入
// checkAdult(20)
// checkAdult(12)
// checkAdult(33)
// checkAdult(18)
// // output 輸出
// "成年"
// "未成年"
// "成年"
// "未成年"

function checkAdult(age) {
  age >= 20 ? console.log("成年") : console.log("未成年");
}

// 題目二：法定性行為年紀計算機(16歲)
// // input 輸入
// canSex(16,"male")
// canSex(14,"female")
// canSex(20,"female")
// // output 輸出
// "可以色色"
// "你還不行哦~"
// "可以色色"

function canSex(age, gender) {
  age >= 16 ? console.log("可以色色") : console.log("你還不行哦~");
}

// 題目三：滿 300 即可符合優惠條件，能使用 50 元折價券
// // input 輸入
// buy(450)
// buy(299)
// buy(0)
// buy(-30)
// buy(300)
// buy(1000)

// // output 輸出
// "符合優惠券資格，費用是 400"
// "不優惠券資格，費用是 299"
// "...你來亂的嗎？"
// "再鬧我就生氣了哦~"
// "剛好符合資格，費用是 250"
// "符合優惠券資格，費用是 950"

function buy(total) {
  if (total < 0) {
    console.log("再鬧我就生氣了哦~");
  } else if (total == 0) {
    console.log("...你來亂的嗎？");
  } else if (total == 300) {
    console.log("剛好符合資格，費用是 250");
  } else if (total > 300) {
    console.log(`符合優惠券資格，費用是 ${total - 50}`);
  } else {
    console.log(`不優惠券資格，費用是 ${total}`);
  }
}

// 是否為質數
// // input 輸入
// isPrime(29)
// isPrime(17)
// isPrime(-3)
// isPrime(288)
// isPrime(97)
// isPrime(6)
// // output 輸出
// "是質數"
// "是質數"
// "無法判別"
// "我只能算 100 以內的質數計算，原諒我QQ"
// "是質數"
// "不是質數"

function isPrime(num) {
  if (num > 100) {
    console.log("我只能算 100 以內的質數計算，原諒我QQ");
  } else if (num < 2) {
    console.log("無法判別");
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        console.log("不是質數");
        return;
      } else {
        console.log("是質數");
        return;
      }
    }
  }
}
