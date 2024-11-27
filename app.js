function countStaircaseWays(n) {
  // base cases
  if (n === 1) return 1
  if (n === 2) return 2

  // variables
  let waysToReachPreviousStep = 2 // ways to reach step n-1
  let waysToReachTwoStepsBack = 1 // ways to reach step n-2
  let totalWays

  // loop steps from 3 to n
  for (let i = 3; i <= n; i++) {
    totalWays = waysToReachPreviousStep + waysToReachTwoStepsBack

    // move the values forward for the next iteration:
    waysToReachTwoStepsBack = waysToReachPreviousStep
    waysToReachPreviousStep = totalWays
  }

  return totalWays
}

// PSEUDO CODE
/*

  BASE CASES:
  - if there's only 1 step, there is exactly 1 way to reach it (1)
  - if there's 2 steps, there's exactly 2 ways to reach it (1 + 1) and (2)


  INITIALIZE VARIABLES:
  - create variable for num of ways to reach the prev step (n-1)
  - create variable for num of ways to reach 2 steps back (n-2)
  - create variable to track total num of ways to reach current step (n)

  ITERATE STEPS:
  - create a loop to iterate each step from 3 up to n
      - for each step (n), calculate the number of ways to reach it
      - use the formula ways(n) = ways(n-1) + ways(n-2)
      - update the variables for the next iteration
 
  RETURN VALUE:
  - return the total number of ways to reach the current step (n)

*/
