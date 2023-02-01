//判斷是否為質數
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 1) {
//     console.log("1不是質數也不是合數");
//     return;
//   } else if (isPrime(arr[i])) {
//     console.log("質數");
//   } else {
//     console.log("合數");
//   }
// }

// function isPrime(n) {
//   //如果從2到n-1有數字可以整除，就不是質數
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

//Unit 4.5 印出金字塔
//按照題目給予的數字N，輸出N層的金字塔

//1.尋找規律
//2.一共有n層
//2.第i層時，會有2i-1個*
//3.＊會置中
//4.需要n-i個空白

// for (let i = 1; i <= n; i++) {
//   printLayer(i, n);
// }

// function pyramid(n) {
//   let star = 1;
//   let space = n - 1;
//   while (space >= 0) {
//     printStars(space, star);
//     star += 2;
//     space -= 1;
//   }
// }

// function printStars(space, star) {
//   let result = "";
//   for (let i = 0; i < space; i++) {
//     result += " ";
//   }
//   for (let i = 0; i < star; i++) {
//     result += "*";
//   }
//   console.log(result);
// }

// pyramid(3);

//Unit4.6 九九乘法表
// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i}*${j}=${i * j}`);
//   }
// }

// //Unit4.7 印出1-100的平方數
// //方法１
// //開根號: Math.sqrt(n)
// //無條件捨去: Math.floor(n)
// for (let i = 1; i <= 100; i++) {
//   if (isSquare(i)) {
//     console.log(i);
//   }
// }

// function isSquare(n) {
//   let root = Math.floor(Math.sqrt(n));
//   return root * root === n;
// }

// //方法２
// //直到平方數超過100
// let i = 1;
// while (i * i <= 100) {
//   console.log(i * i);
//   i++;
// }

// //Project4

//印出聖誕樹
//1. 輸入一個數字n，代表要印出n層
//2. 確認每層需要印出幾個空白和* （function repeat）
//3. 每層會印出2n-1個* ， 會有n-i個空白 (i是當前層數)
function solve(n) {
  for (let i = 1; i <= n; i++) {
    printTree(i, n);
  }
  for (let i = 1; i <= n; i++) {
    printBottom(n);
  }
}

function printTree(i, n) {
  console.log(repeat(" ", n - i) + repeat("*", 2 * i - 1));
}
function printBottom(n) {
  console.log(repeat(" ", n - 1) + "|");
}

function repeat(str, n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += str;
  }
  return result;
}

solve(3);

//NM乘法表
// 簡單來說，N 代表 N 個數，M 代表每個數要乘到多少，例如說 N=2, M=3，就會是：

// 1*1, 1*2, 1*3
// 2*1, 2*2, 2*3

// 現在給你 N 以及 M，請你輸出 NM 乘法表會長什麼樣子
// function solve(n, m) {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= m; j++) {
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//   }
// }

// solve(2, 3);

//水仙花數
//「一個 n 位數的數字，每一個數字的 n 次方加總等於自身」
//現在給你一個範圍 n 到 m，請你求出這範圍之中的水仙花數有哪些
//1.判斷是否為水仙花數
//1-1.確認位數n
//1-2.確認 遍歷每個數字^n加總是否等於自身
//1-3.是的話把它印出來

function Narcissistic(n, m) {
  for (let i = n; i <= m; i++) {
    confirm(i);
  }
}

function confirm(num) {
  let result = "";
  let sum = 0;
  let str = num.toString();
  for (let i = 0; i < str.length; i++) {
    sum += str[i] ** str.length;
  }
  if (sum == num) {
    result += `${num.toString()} `;
  } else {
    return;
  }
  console.log(result);
}

Narcissistic(5, 200);
