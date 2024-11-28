function binarySearch(arr, value) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    let middle = Math.floor((right + left)/2)

    if (arr[middle] === value) return middle

    if (arr[middle] < value) {
      left = middle + 1
    }
    if (arr[middle] > value) {
      right = middle - 1
    }
  }

  return -1
}

// Example input: [1,2,4,5,6,7,9,10,11,12]
//  --> length = 12, target = 4