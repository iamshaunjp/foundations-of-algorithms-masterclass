function binarySearch(arr, value, left = 0, right = arr.length - 1) {
  // case for value not in the array
  if (left > right) {
    return -1
  }

  let middle = Math.floor((right + left) / 2)

  if (arr[middle] === value) {
    return middle
  }

  if (arr[middle] < value) {
    return binarySearch(arr, value, middle + 1, right)
  }

  if (arr[middle] > value) {
    return binarySearch(arr, value, left, middle - 1)
  }
}