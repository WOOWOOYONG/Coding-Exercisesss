// 1.Convert Celsius to Fahrenheit
// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

// You are given a variable celsius representing a temperature in Celsius.
// Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
// Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

//攝氏溫度轉成華氏溫度
function convertCtoF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(convertCtoF(30));

// 2.Reverse a String
// Reverse the provided string and return the reversed string.
// For example, "hello" should become "olleh".

//先用.split('')拆成陣列，用.reverse()反轉再用.join('')組成字串
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// 3. Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

//使用for loop遍歷1~num的整數
//輸出相乘的結果
function factorialize(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

console.log(factorialize(5));

// 4. Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

//先將輸入的字串拆成陣列
//預設第一項的字串長度最長，遍歷陣列中的項目
//如果比longest.length長，就取代它
//輸出longest字串的長度
function findLongestWordLength(str) {
  let arr = str.split(" ");
  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (longest.length < arr[i].length) {
      longest = arr[i];
    }
  }
  return longest.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// 5.Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity,
// the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

// function largestOfFour(arr) {
//   let result = [];
//   for (i = 0; i < arr.length; i++) {
//     let max = arr[i][0];
//     for (let j = 1; j < 4; j++) {
//       if (arr[i][j] > max) {
//         max = arr[i][j];
//       }
//     }
//     result.push(max);
//   }
//   return result;
// }

//遍歷傳入陣列中的每個陣列(item)
//把item從小到大排列
//每個item的第四個數（最大值）push到空陣列
//return result
function largestOfFour(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].sort((a, b) => {
      return a - b;
    });
    result.push(arr[i][3]);
  }
  return result;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// 6.Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

//target有可能大於1個字元，index不能取str.length-1
//使用String.prototype.slice()分割字串，確認是否與target相同
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));

// 7.Repeat a String Repeat a String
// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.
// For the purpose of this challenge, do not use the built-in .repeat() method.

//使用for loop重複加上str
function repeatStringNumTimes(str, num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += str;
  }
  return result;
}

repeatStringNumTimes("abc", 3);

// 8.Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.

//傳入1個str,1個num，如果str的長度大於num，第num個字元後用...代替
//使用展開運算子把str每個字元拆開放到陣列
//使用splice方法分割字串，把...push到陣列
//最後把陣列組成字串輸出
function truncateString(str, num) {
  let arr = [...str];
  if (arr.length > num) {
    arr.splice(num);
    arr.push("...");
    return arr.join("");
  } else {
    return str;
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// 9.Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.
//回傳陣列中符合func條件的第一個數字，如果沒有符合的元素，回傳undefined

//先宣告一個變數=undefined
//用for loop遍歷arr，如果符合func(true)，num = 這個元素，否則回傳undefined
function findElement(arr, func) {
  let num = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      break;
    }
  }
  return num;
}

console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0));

// 10.Boo who
// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

//使用typeof 確認傳入參數型別是否為boolean
function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
}

console.log(booWho(null));

// 11.Title Case a Sentence
// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

//先把字串拆分到陣列
//使用for in 遍歷陣列抓出index
//每個項目的第一個字轉成大寫，使用slice分割剩下的字元轉成小寫後組成字串
//放入新陣列後組成字串輸出
function titleCase(str) {
  let arr = str.split(" ");
  const updatedArr = [];
  for (let index in arr) {
    console.log(arr[index]);
    updatedArr[index] =
      arr[index][0].toUpperCase() + arr[index].slice(1).toLowerCase();
  }
  return updatedArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));

// 12.Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

//先複製arr1,arr2
//使用for loop將arr插入resultArr中，插入的位置就是第三個參數n的位置
function frankenSplice(arr1, arr2, n) {
  const arr = arr1.slice();
  const resultArr = arr2.slice();
  for (let i = 0; i < arr.length; i++) {
    resultArr.splice(n + i, 0, arr[i]);
  }
  return resultArr;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// 13.Falsy Bouncer
// Remove all falsy values from an array. Return a new array; do not mutate the original array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

//移除傳入陣列當中所有falsy的值
//先複製傳入的陣列，宣告一個新陣列
//遍歷arr1，如果是true的值就push到result
//回傳result
function bouncer(arr) {
  const arr1 = arr.slice();
  let result = [];
  arr1.forEach((item) => {
    if (Boolean(item)) {
      result.push(item);
    }
  });
  return result;
}
console.log(bouncer([7, "ate", "", false, 9]));

// 14. Where do I Belong
// Return the lowest index at which a value (second argument)
// should be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5)
// should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted
// it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

//將傳入陣列排序後，遍歷陣列與num比較
function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    //一旦陣列中的數大於num 回傳index
    if (arr[i] >= num) return i;
  }
  //如果陣列中的數都小於num 回傳陣列長度
  return arr.length;
}

console.log(getIndexToIns([40, 60], 50));

// 15.Mutations
// Return true if the string in the first element of the array contains
// all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"],
// should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"]
// should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
//如果第一個字串中有第二個字串的所有字元回傳true，否則回傳false

//先把陣列當中的字串都轉成小寫比較
//遍歷secondStr，把裡面的元素每個抓出來跟firstStr用indexOf檢查是否包含
//如果firstStr當中找不到，回傳false，否則回傳true
function mutation(arr) {
  const firstStr = arr[0].toLowerCase();
  const secondStr = arr[1].toLowerCase();
  for (let i = 0; i < secondStr.length; i++) {
    if (firstStr.indexOf(secondStr[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"]));

// 16.Chunky Monkey
// Write a function that splits an array (first argument) into groups
// the length of size (second argument) and returns them as a two-dimensional array.

// function chunkArrayInGroups(arr, size) {
//   let temp = [];
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % size !== size - 1) {
//       temp.push(arr[i]);
//     } else {
//       temp.push(arr[i]);
//       result.push(temp);
//       temp = [];
//     }
//   }
//   if (temp.length !== 0) {
//     result.push(temp);
//   }
//   return result;
// }

//宣告一個新陣列
//遍歷輸入的陣列，根據size分割原陣列
//切割出的陣列再push到newArr回傳
function chunkArrayInGroups(arr, size) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(
  '🚀 ~ chunkArrayInGroups(["a", "b", "c", "d"], 2)',
  chunkArrayInGroups(["a", "b", "c", "d"], 2)
);
