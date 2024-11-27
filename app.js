function fib(n) {
  // base cases
  if (n < 1) return 0
  if (n === 1) return 1
  
  return fib(n - 1) + fib(n - 2)
}

/*

Example with n=4
  --> return fib(3) + fib(2) 
    --> return fib(2) + fib(1)->1 + fib(1)->1 + fib(0)->0
      --> return fib(1)->1 + fib(0)->0

*/