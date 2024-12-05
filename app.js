/*
  CHALLENGE 5 - Minimum Coin Change Problem
  -----------------------------------------
  Given an array of coin denominations `coins` and a target amount `amount`, write a function to calculate the minimum number of coins required to make up the target amount. If it’s not possible to form the amount with the given coins, return `-1`

  Examples:

   Input: coins = [1, 2, 5], amount = 11
   Output: 3
   Explanation: 11 can be formed using three coins: 5 + 5 + 1

   Input: coins = [2], amount = 3
   Output: -1
   Explanation: It's not possible to form 3 with the given coins

   Input: coins = [1], amount = 0
   Output: 0
   Explanation: No coins are needed to form 0

*/

function coinChange(coins, amount) {

  // create array to store the min number of coins for each amount
  // --> the amount would be the index
  // --> e.g. minCoins[7] value would be the min coins for the amount 7p
  // --> init index 0 in the array to be 0 (0 coins need to make 0p)
  // --> init all other array values to Infinity to begin with

  // loop through each coin
  // --> for each coin, update the array for every amount
  // --> for each coin, initialize i to be the coin value
  // --> update the minCoins array positions when you find lower values

  // if the target amount remains unreachable (Infinity), return -1
  // otherwise, return the value at the target amount in the array
  
}
