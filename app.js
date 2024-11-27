// Challenge A
function getFirstElement(arr) {
  let first = arr[0]

  return first
}

// Challenge B
function printAllElementsTwice(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

// Challenge C
function printFirstHalf(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    console.log(arr[i])
  }
}

// Challenge D
function countInversions(arr) {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++
      }
    }
  }

  return count
}
