function findTwoNumbersWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return null; 
  }
  
  const sortedArray = [-3, 2, 4, 6, 8, 11, 14];
  const targetSum = 10;
  console.log(findTwoNumbersWithSum(sortedArray, targetSum)); 
  