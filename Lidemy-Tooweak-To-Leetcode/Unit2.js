//Unit2.5 找次大值

//先把最大值和次大值設為無限小的數字，遍歷陣列
//狀況１: 如果arr[i]大於最大值，也一定比次大值大，次大值=原本的最大值，arr[i]=最大值
//狀況2: 如果arr[i]小於最大值，且大於次大值，arr[i] = 次大值
//狀況3: arr[i]比次大值還要小，沒事
let arr = [6, 9, 3];
let max = -Infinity;
let max2 = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max2 = max;
    max = arr[i];
  } else if (arr[i] > max2) {
    max2 = arr[i];
  }
}
console.log(max, max2);

//Unit2.6 字串轉大寫
//判斷字串是否為小寫
//方法１：ASCII code 是否介於97(小寫a)~122(小寫z)
//方法2：直接比大小(按照字典順序)，c>='a' && c<='z'
//小寫轉大寫
//方法1: ASCII code - 32
//String.fromCharCode('a'.charCodeAt(0)-32) // A
//方法2: s.toUpperCase()

let str = "Hello";
let ans = "";
for (let i = 0; i < str.length; i++) {
  //轉成ASCII code
  let code = str.charCodeAt(i);
  //判斷是否為小寫
  if (code >= 97 && code <= 122) {
    //轉成大寫
    ans += String.fromCharCode(code - 32);
  } else {
    ans += str[i];
  }
}
console.log(ans);

//Unit2.7 刪除特定字元
let str2 = "hello";
let deleted = "l";
let ans2 = "";
for (let i = 0; i < str2.length; i++) {
  //如果等於要刪除的字，略過
  if (str2[i] !== deleted) {
    ans2 += str2[i];
  }
}
console.log(ans2);

//Project2作業

//1.找次小值
let nums = [4, 6, 2, 8, 1];
let min = Infinity;
let min2 = Infinity;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] < min) {
    min2 = min;
    min = nums[i];
  } else if (nums[i] < min2) {
    min2 = nums[i];
  }
}
console.log(min, min2);

//2.大小寫互換
let str1 = "AppLe";
let ans1 = "";
for (let i = 0; i < str1.length; i++) {
  //轉成ASCII code
  let code = str1.charCodeAt(i);
  //判斷是否為小寫
  if (code >= 97 && code <= 122) {
    //轉成大寫
    ans1 += String.fromCharCode(code - 32);
    //判斷是否大寫
  } else if (code >= 65 && code <= 90) {
    //轉成小寫
    ans1 += String.fromCharCode(code + 32);
  } else {
    ans1 += str1[i];
  }
}
console.log(ans1);

//3.印出因數
//如果num可以被i整除，i就是num的因數
let num = 40;
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}
