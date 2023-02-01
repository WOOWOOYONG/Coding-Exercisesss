//題目: https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/javascript
//invert values

//我的解法:
//宣告一個空陣列
//遍歷傳入陣列當中的數
//每個數字乘上-1，就會是相反的數字
//push到空陣列

function invert(array) {
  let newarr = [];
  for (let i = 0; i < array.length; i++) {
    newarr.push(array[i] * -1);
  }
  return newarr;
}

//題目 https://www.codewars.com/kata/546e2562b03326a88e000020/javascript
//Square Every Digit
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//我的解法
//因為string有index的特性可以遍歷每個字元
//先將傳入的number 轉成 string
//宣告一個空字串
//遍歷傳入的字串，使用算術運算子得到每個字元(數字)的平方
//把結果組成字串
//最後轉型回數字輸出

function squareDigits(num) {
  let number = num.toString();
  let result = "";
  for (let i = 0; i < number.length; i++) {
    result += number[i] ** 2;
  }
  return Number(result);
}

//題目 https://www.codewars.com/kata/554b4ac871d6813a03000035/javascript
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//Examples:
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

//解法1-用迴圈比較
//首先把傳入的字串轉型成陣列
//預設最大值和最小值是此陣列的第一個數
//使用forEach與陣列中每個數比較（轉型成數字比較）
//比最大值大，取代成最大值，比最小值小，取代成最小值

function highAndLow(numbers) {
  let numArr = numbers.split(" ");
  let max = numArr[0];
  let min = numArr[0];
  numArr.forEach((num) => {
    if (Number(num) > max) {
      max = num;
    } else if (Number(num) < min) {
      min = num;
    }
  });
  return `${max} ${min}`;
}

//解法2-Array.prototype.sort()
//轉成陣列後從小到大排序
//return a - b時會把字串轉型成數字比較
//最大值即陣列中最後的數，最小值即陣列中第一個數

function highAndLow(numbers) {
  let arr = numbers.split(" ").sort((a, b) => {
    return a - b;
  });
  return `${arr[arr.length - 1]} ${arr[0]}`;
}

//題目 https://www.codewars.com/kata/55f2b110f61eb01779000053

// Given two integers a and b, which can be positive or negative,
// find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!

//解法
//算出a~b之間所有整數的總和
//每個數公差=1，可以用等差數列公式得到總和
//(首項+末項)*項數/2

function getSum(a, b) {
  if (a === b) {
    return a;
  } else if (a > b) {
    return ((a + b) * (a - b + 1)) / 2;
  } else {
    return ((a + b) * (b - a + 1)) / 2;
  }
}

//題目 https://www.codewars.com/kata/54ff3102c1bad923760001f3

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//把母音放到一個陣列
//用雙重迴圈檢查傳入字串的每個字元 是否跟母音陣列中的值相符
//有的話count+1

function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < 5; j++) {
      if (str[i] == vowels[j]) {
        count += 1;
      }
    }
  }
  return count;
}
