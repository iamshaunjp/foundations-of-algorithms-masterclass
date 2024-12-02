function countPaths(m, n, memo = {}) {
  // base case - only one path if m or n is 1
  if (m === 1 || n === 1) return 1

  // base case - no path if m or n is 0
  if (m < 1 || n < 1) return 0

  // create a key for current grid position
  const key = `${m},${n}`

  // return memoized result if prev solved for this position
  if (memo[key]) {
    return memo[key]
  }

  memo[key] = countPaths(m - 1, n, memo) + countPaths(m, n - 1, memo)

  return memo[key]
}

/*

input: (3,3)

  --> count(2,3) + count(3,2)
  --> count(1,3) + count(2,2) + count(2,2) + count(3,1)
  --> 1 + count(1,2) + count(2,1) + count(1,2) + count(2,1) + 1
  --> 1 + 1 + 1 + 1 + 1 + 1 = 6

*/