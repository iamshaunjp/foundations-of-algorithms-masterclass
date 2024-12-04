/*
  CHALLENGE 1 - Greatest Common Divisor
  ------------------------------------- 
  Given two positive integers, a and b, write a function that 
  returns their Greatest Common Divisor (GCD). The GCD is defined 
  as the largest positive integer that divides both a and b 
  without leaving a remainder

  Example - GCD of 12 & 18 is 3
*/

function findGCD(a, b) {

  // use recursion to simplify the problem

  // a % b = r
  // example: 14 % 4 = 2, where q = 3

  // a = b * q + r
  // example: 14 = (4 * 3) + 2

  // rearranging for r: r = a - (b * q)
  // example: 2 = 14 - (4 * 3)

  // any number that divides both a and b must also divide r
  // example: (r/gcd) = (a/gcd) - (b/gcd * q)

  // since (a/gcd), (b/gcd) and q are all integers (whole numbers),
  // (r/gcd) must also be an integer (whole number)

  // therefore any number that divides both "a" and "b" must also divide "r".

  // so we can replace "a" with "r" to make the problem smaller:
  // this means findGCD(a, b) is the same as findGCD(b, a % b)

  // base case: if one number is 0, the GCD is the other number
  // example: findGCD(a, 0) = a

}