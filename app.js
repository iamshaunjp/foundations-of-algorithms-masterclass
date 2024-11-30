function selectionSort(arr) {

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i

    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    if (min !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }

  return arr
}