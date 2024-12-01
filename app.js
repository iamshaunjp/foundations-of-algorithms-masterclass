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