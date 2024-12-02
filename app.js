function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  // frequence object
  const frequency = {}

  for (const char of str1) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!frequency[char]) {
      return false
    }
    frequency[char]--
  }

  return true
}

/* str1: asleep, str2: please

{
  a: 1,
  s: 1,
  l: 1,
  e: 2,
  p: 1
}

*/