/*
  CHALLENGE 3 - Check if a Word is a Palindrome
  ------------------------------------- 
  Write a function that checks if a given string is a palindrome. A palindrome is a word that reads the same backwards as forwards.

  Example: "racecar" --> true, "hello" --> false
*/

function isPalindrome(str) {
  
  // pointers
  let left = 0
  let right = str.length - 1

  while (left < right) { 
    
    if (str[left] !== str[right]) {
      return false
    }

    // move pointers inwards
    left++
    right--
  }

  return true
}