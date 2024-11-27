function middleValues(arr) {
  let midVals = []
  let end = arr.length - 1

  while (end > 0) {
    let mid = Math.floor(end / 2)

    midVals.push(arr[mid])
    end = mid
  }

  return midVals
}

// Example input --> [1, 2, 3, 4, 5, 6, 7, 8]