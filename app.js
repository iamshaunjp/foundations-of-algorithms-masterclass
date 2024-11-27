// O(1)
function getFirstElement(arr) {
  let first = arr[0]

  return first
}

// O(n)
function printAllElementsTwice(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

// O(n)
function printFirstHalf(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    console.log(arr[i])
  }
}

// O(n^2)
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

// [3,1,2,1] --> (3,1), (3,2), (2,1) = 3
