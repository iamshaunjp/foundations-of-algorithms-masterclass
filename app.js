// CHALLENGE - turn this iterative algorithm into a recursive algorithm

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

