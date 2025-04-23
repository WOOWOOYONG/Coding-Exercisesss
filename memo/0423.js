/**
 * 合併兩個已排序的陣列成為一個新的已排序陣列
 * 使用雙指針，從兩個陣列的起始位置開始比較元素
 * 時間複雜度: O(n+m)，其中 n 和 m 分別為兩個輸入陣列的長度
 * 空間複雜度: O(n+m)，用於存儲合併後的陣列
 *
 * @param {Array} arr1 - 第一個已排序的陣列
 * @param {Array} arr2 - 第二個已排序的陣列
 * @return {Array} - 合併後的已排序陣列
 */
function combine(arr1, arr2) {
  // 初始化兩個指針，分別指向兩個陣列的起始位置
  let p1 = 0; // arr1 的指針
  let p2 = 0; // arr2 的指針
  const result = []; // 存放合併結果的陣列

  // 當任一陣列還有元素未處理時，繼續循環
  while (p1 < arr1.length || p2 < arr2.length) {
    // 情況1: arr1 已處理完，取 arr2 的當前元素
    if (p1 >= arr1.length) {
      result.push(arr2[p2]);
      p2++;
    }
    // 情況2: arr2 已處理完，取 arr1 的當前元素
    else if (p2 >= arr2.length) {
      result.push(arr1[p1]);
      p1++;
    }
    // 情況3: 兩陣列都未處理完，比較當前元素，取較小的元素
    else if (arr1[p1] < arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
    }
    // 情況4: arr2 的當前元素小於或等於 arr1 的當前元素
    else {
      result.push(arr2[p2]);
      p2++;
    }
  }
  return result; // 回傳合併後的已排序陣列
}
