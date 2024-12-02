function findPairWithSum(arr, target) {
  let left = 0
  let right = arr.length - 1

  // loop until the pointers meet
  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [arr[left], arr[right]]
    } 
    
    if (sum < target) {
      left++
    }
    
    if (sum > target){
      right--
    }
  }

  return null
}

// arr = [1,2,4,6,8,8,9], target = 12
// pair = [4,8]