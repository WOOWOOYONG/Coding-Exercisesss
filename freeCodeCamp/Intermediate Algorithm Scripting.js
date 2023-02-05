// 1 Sum All Numbers in a Range
// We'll pass you an array of two numbers.
// Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4
//(both inclusive) is 10.

//寫法1
function sumAll1(arr) {
  const min = arr[0] < arr[1] ? arr[0] : arr[1];
  const max = arr[0] > arr[1] ? arr[0] : arr[1];

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

//寫法2
function sumAll2(arr) {
  const newarr = arr.sort((a, b) => {
    return a - b;
  });
  let total = 0;
  for (let i = newarr[0]; i <= newarr[1]; i++) {
    total += i;
  }
  return total;
}

console.log(sumAll2([1, 4]));

//2. Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays,
// but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  //兩個陣列先取聯集放到新陣列
  //確認新陣列當中沒有重複的數字
  const union = new Set([...arr1, ...arr2]);
  //   const union = [];
  //   for (let el of arr1) {
  //     if (!union.includes(el)) {
  //       union.push(el);
  //     }
  //   }
  //   for (let el of arr2) {
  //     if (!union.includes(el)) {
  //       union.push(el);
  //     }
  //   }

  // 確認元素是否只存在其中一個陣列內
  const symmDiff = [];
  for (let currentEl of union) {
    if (arr1.includes(currentEl) && !arr2.includes(currentEl)) {
      symmDiff.push(currentEl);
    } else if (arr2.includes(currentEl) && !arr1.includes(currentEl)) {
      symmDiff.push(currentEl);
    }
  }
  return symmDiff;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

// 3. Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
// Note: You have to use the arguments object.

//用arguments關鍵字得到傳入的所有參數
//用spread operator將傳入的參數變成一個陣列 ex: [[1,2,3,1,2,3],2,3]
//用slice取出目標陣列外的參數
function destroyer(arr) {
  // const argsArr = Array.from(arguments)
  const argsArr = [...arguments].slice(1);
  // const filteredArr = [];
  // for (const el of arr) {
  //   if (!argsArr.includes(el)) {
  //     filteredArr.push(el);
  //   }
  // }
  const filteredArr = arr.filter((el) => !argsArr.includes(el));
  return filteredArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
