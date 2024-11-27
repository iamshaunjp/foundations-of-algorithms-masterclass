// given a mixed array of positive and negative integers, return the total number of only positive integers

function countPositiveNumbers(arr) {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++
    }
  }

  return count
}

// create variable to count pos numbers

// loop through array and look at each number
  // check if number is > 0
    // if so, add 1 to the count