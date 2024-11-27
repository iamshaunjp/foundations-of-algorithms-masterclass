function countStaircaseWays(n) {
  // bases cases
  if (n === 1) return 1
  if (n === 2) return 2

  // recursiv calls for (n - 1) and (n - 2)
  return countStaircaseWays(n - 1) + countStaircaseWays(n - 2)
}


/* 

Example --> n = 5
  --> return count(4) + count(3)
    --> return count(3) + count(2)->2 + count(2)->2 + count(1)->1
      --> return count(2)->2 + count(1)->1

*/