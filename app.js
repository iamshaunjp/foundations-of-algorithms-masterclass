function fib(n, memo = {}) {
  // check if the value is already in the memo
  if (n in memo) return memo[n]

  // base cases
  if (n < 1) return 0
  if (n === 1) return 1

  // recursive calls with memoization
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)

  return memo[n]
}

// Time complexity --> O(n)
// Space complexity --> O(n)

/*

INPUT: n=5
--> memo[5] = fib(4) + fib(3)
  --> memo[4] = fib(3) + fib(2)
    --> memo[3] = fib(2) + fib(1)
      --> memo[2] = fib(1) + fib(0) = 1
*/