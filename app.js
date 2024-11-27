function printAllPairs(arr) {

  for (let i = 0; i < arr.length; i++) {

    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j])
    }

  }

}

// Time Complexity - O(n^2)

// Example - [3,7,2,9]