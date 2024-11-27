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