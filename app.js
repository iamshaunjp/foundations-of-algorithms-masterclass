function countdown(num) {
  if (num <= 0) { // this is the base case
    console.log('done!')
    return // no more recursions
  }

  console.log(num)
  countdown(num - 1)
}
