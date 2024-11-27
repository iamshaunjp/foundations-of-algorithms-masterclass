// Staircase problem
function countStaircaseWays(n) {
  if (n === 1) return 1
  if (n === 2) return 2

  return countStaircaseWays(n - 1) + countStaircaseWays(n - 2)
}

// Fibonacci sequence
function fib(n) {
  if (n < 1) return 0
  if (n === 1) return 1
  
  return fib(n - 1) + fib(n - 2)
}