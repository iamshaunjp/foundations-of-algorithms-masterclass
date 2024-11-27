// Example 1

function findFirstShortestWord(wordsArray) {

  let shortest = wordsArray[0]

  for (let word of wordsArray) {
    if (word.length < shortestWord.length) {
      shortest = word
    }
  }

  // return the shortest word
  return shortest
}


// Example 2

function fib(n) {
  if (n < 1) return 0
  if (n === 1) return 1

  let prev = 1
  let current = 1

  for (let i = 3; i <= n; i++) {
    let next = current + prev
    prev = current
    current = next
  }

  return current
}