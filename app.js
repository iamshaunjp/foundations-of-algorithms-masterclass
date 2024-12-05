/*
  CHALLENGE 4 - Longest Substring Without Repeating Characters
  ------------------------------------- 
  Given a string, str, write a function to find the length of the longest substring that contains only unique characters (no repeating characters)

  Example: "pbbabcbcbb" --> 3 (abc)
*/

function lengthOfLongestSubstring(str) {
  let maxLength = 0
  let start = 0
  let charIndex = {}

  for (let end = 0; end < str.length; end++) {
    const char = str[end]

    if (char in charIndex && charIndex[char] >= start) {
      start = charIndex[char] + 1
    }

    charIndex[char] = end
    maxLength = Math.max(maxLength, end - start + 1)
  }

  return maxLength
}