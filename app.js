function countStaircaseWays(n, memo = {}) {
  // check if the value is already in the memo
  if (n in memo) return memo[n]

  // base cases
  if (n === 1) return 1
  if (n === 2) return 2

  memo[n] = countStaircaseWays(n - 1) + countStaircaseWays(n - 2)

  return memo[n]
}