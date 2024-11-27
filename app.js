function countStaircaseWays(n) {
  if (n === 1) return 1
  if (n === 2) return 2

  return countStaircaseWays(n - 1) + countStaircaseWays(n - 2)
}