// Challenge: Optimize the Bubble Sort 

function bubbleSort(arr) {
  for (i = arr.length - 1; i > 0; i--) {
    console.log('new pass')
    let swap = false

    for (j = 0; j < i; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        swap = true 
      }
    }

    console.log('array after pass:', arr)
    if (!swap) {
      console.log('already sorted, breaking early')
      break
    }
  }

  return arr
}