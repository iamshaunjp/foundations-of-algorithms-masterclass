// version 1 - loop
function sumToNLoop(n) {
  let total = 0

  for (let i = 1; i <= n; i++) {
      total += i
  }
  
  return total
}

// Time Complexity - O(n)