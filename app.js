// Example 1 - constant space O(1)
function addNumbers(a, b) {
  return a + b
}

// Example 2 - linear space O(n)
function createNumberList(n) {
  let numberList = []

  for (let i = 0; i < n; i++) {
    numberList.push(i)
  }

  return numberList
}

// Example 3 - quadratic space O(n^2)
function createPairs(n) {
  let pairs = []

  for (let i = 0; i < n; i++) {
    let row = []

    for (let j = 0; j < n; j++) {
      row.push([i, j])
    }

    pairs.push(row)
  }

  return pairs
}

// for n = 3:
// [[[0,0],[0,1],[0,2]], [[1,0],[1,1],[1,2]], [[2,0],[2,1],[2,2]]]
// --> 3 x 3 = 9 pairs in total