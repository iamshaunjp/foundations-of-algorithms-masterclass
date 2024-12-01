// a helper function to merge two sorted arrays
function mergeTwoArrays(arrayOne, arrayTwo) {
  let totalLength = arrayOne.length + arrayTwo.length
  let merged = []
  let i = 0
  let j = 0

  while (merged.length < totalLength) {
    // check if end of arrOne is reached
    if (i >= arrayOne.length) {
      merged.push(arrayTwo[j])
      j++
      continue
    }

    // check if end of arrTwo is reached
    if (j >= arrayTwo.length) {
      merged.push(arrayOne[i])
      i++
      continue
    }

    // check which is bigger and merge
    if (arrayOne[i] <= arrayTwo[j]) {
      merged.push(arrayOne[i])
      i++
      continue
    }

    merged.push(arrayTwo[j])
    j++
  }

  return merged
}

// Challenge: make the merge sort algorithm!

function mergeSort(arr) {
  // base case - return array if length <= 1 (already sorted)

  // find the middle index of the array
  // split the array into two halves - left and right
  // recursively call mergeSort on both halves
    // --> this will sort each half individually

  // merge & return the sorted halves back together
  // use the mergeTwoArrays helper function to do this
}
