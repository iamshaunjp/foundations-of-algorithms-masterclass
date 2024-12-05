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

  Using the largest coin first is not always the best way:
  Example: coins = [1p, 20p, 50p], amount = 60p

*/

function coinChange(coins, amount) {

  const minCoins = new Array(amount + 1).fill(Infinity)
  minCoins[0] = 0

  for (let coin of coins) {

    for (let i = coin; i <= amount; i++) {
      minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1)
    }

  }

  return minCoins[amount] === Infinity ? -1 : minCoins[amount]
}
