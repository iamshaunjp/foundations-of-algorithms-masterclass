/*
  CHALLENGE 1 - Greatest Common Divisor
  ------------------------------------- 
  Given two positive integers, a and b, write a function that 
  returns their Greatest Common Divisor (GCD). The GCD is defined 
  as the largest positive integer that divides both a and b 
  without leaving a remainder

  Example - GCD of 12 & 18 is 3
*/

// recursive solution
function findGCD(a, b) {
  // base case - if b is 0, the GCD is "a"
  if (b === 0) {
    return a
  }

  return findGCD(b, a % b)
}

// iterative solution
function findGCDIterative(a, b) {
  let gcd = 1
  let smallest = Math.min(a, b)

  for (let i = 1; i <= smallest; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i
    }
  }

  return gcd
}
