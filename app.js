function findLargestNumber(arr) {
  if (arr.length === 1) return arr[0]

  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)

  const leftMax = findLargestNumber(left)
  const rightMax = findLargestNumber(right)

  return Math.max(leftMax, rightMax)
}