// version 1 - loop
function sumToNLoop(n) {
  let total = 0
  for (let i = 1; i <= n; i++) {
      total += i
  }
  return total
}

// version 2 - formula
function sumToNFormula(n) {
  return (n * (n + 1)) / 2
}



// let start = performance.now()
// sumToNLoop(10)
// let end = performance.now()
// console.log(`time taken: ${(end - start)} ms`)

// start = performance.now()
// sumToNLoop(100000000) // 1 hundred mill
// end = performance.now()
// console.log(`time taken: ${(end - start)} ms`)

// start = performance.now()
// sumToNFormula(10) 
// end = performance.now()
// console.log(`time taken: ${(end - start)} ms`)

// start = performance.now()
// sumToNFormula(100000000) // 1 hundred mill
// end = performance.now()
// console.log(`time taken: ${(end - start)} ms`)