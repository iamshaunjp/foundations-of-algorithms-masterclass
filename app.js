function maxSubarraySum(arr, k) {
  if (arr.length < k) return null

  let maxSum = 0
  let windowSum = 0

  // sum the first window of size k
  for (let i = 0; i < k; i++) {
    windowSum += arr[i]
  }

  maxSum = windowSum

  // slide window over the array
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]

    maxSum = Math.max(maxSum, windowSum)
  }

  return maxSum
}