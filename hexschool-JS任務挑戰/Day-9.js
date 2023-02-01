//  5/13(五) 每日 JS 刷題任務 - 正規表達式(週末讀物)
//  https://hackmd.io/yquxbk02R0idPjjR8V0mPA

// 題目一：手機號碼是否正確
// 是否為 10 碼
// 是不是 09 開頭
// // input 輸入
// checkPhoneNumber("0955717222")
// checkPhoneNumber("331")
// checkPhoneNumber("09839398")
// checkPhoneNumber("0977121333")
// // output 輸出
// true
// false
// false
// true

function checkPhoneNumber(str) {
  const mobileReg = /^(09)[0-9]{8}$/;
  return mobileReg.test(str);
}

// 題目二：訂單編號
// 超瞎書局的訂單編號規則

// 只有 6 碼
// 開頭必須是 B 開頭
// // input 輸入
// checkFiveWord("B12")
// checkFiveWord("B89212")
// checkFiveWord("B8987987")
// checkFiveWord("B33212")
// checkFiveWord("A33212")
// // output 輸出
// false
// true
// false
// true
// false

function checkFiveWord(str) {
  const orderReg = /^B\w{5}$/;
  return orderReg.test(str);
}

// 題目三：驗證密碼
// 來兒美超商的電商密碼規則如下：

// 至少一個大寫英文 (?=.*[A-Z])
// 至少一個小寫英文 (?=.*[a-z])
// 至少一個數字 (?=.*\d)
// 至少 8 碼以上 [a-zA-Z\d]{8,} (大小寫英文、數字)

// // input 輸入
// checkPassword("Abc87654")
// checkPassword("Av3")
// checkPassword("YYYYCC123")
// checkPassword("BBBa930033")
// checkPassword("Ka78328K")
// // output 輸出
// true
// false
// false
// true
// true

//

function checkPassword(password) {
  const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return passwordReg.test(password);
}
