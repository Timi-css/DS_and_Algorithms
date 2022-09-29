// Add numbers from 1 to the number passed in the fucntion

// Method 1
function sumOfNum(n) {
  let num = 0;
  for (let i = 1; i <= n; i++) {
    num += i;
  }
  return num;
}

// Method 2
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// evaluating time performance
let t1 = performance.now();
sumOfNum(1000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);

console.log("sum here", sumOfNum(3));
console.log("add up to here", addUpTo(9));

// ----------------------------------------------------------------------------------------------------------
function countUpandDown(n) {
  console.log("Going Up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }

  console.log("Back down. Bye");
}

console.log(countUpandDown(6));

let t3 = performance.now();
countUpandDown(10);
let t4 = performance.now();
console.log(`Time elapsed: ${(t4 - t3) / 1000} seconds.`);

// -----------------------------------------------------------------------------------------------------------
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

console.log(printAllPairs(5));
