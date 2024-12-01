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

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let middle = Math.floor(arr.length/2)

  let left =  mergeSort(arr.slice(0, middle))
  let right = mergeSort(arr.slice(middle))

  return mergeTwoArrays(left, right)
}

// input: [9,2,5,4]
// --> left = mergeSort([9,2]) & right = mergeSort([5,4])
// --> return mergeTwoArrays([2,9], [4,5]) = [2,4,5,9]

// input: [9,2]            
// --> left = mergeSort([9]) & right = mergeSort([2])
// --> left = [9] & right = [2]
// --> return mergeTwoArrays([9], [2]) = [2,9]

// input: [5,4]
// --> left = mergeSort([5]) & right = mergeSort([4])
// --> left = [5] & right = [4]
// --> return mergeTwoArrays([5], [4]) = [4,5]   