function fib(n) {
  // base cases
  if (n < 1) return 0
  if (n === 1) return 1

  let prev = 1 // 1st number in fib sequence
  let current = 1 // 2nd number in fib sequence

  for (let i = 3; i <= n; i++) {
    let next = current + prev
    prev = current
    current = next
  }

  return current
}

// fibonacci sequence
// 1, 1, 2, 3, 5, 8, 13, 21