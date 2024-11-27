// Given an array of numbers, return the sum of all even numbers within it

function sumEvenNumbers(nums) {
  if (nums.length === 0) return 0 // edge case

  let sum = 0 // keep track of the sum of even numbers

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      sum += nums[i]
    }
  }

  return sum
}

// loop through the nums array
  // check if the number is even
    // add the number to the total sum

// return the sum