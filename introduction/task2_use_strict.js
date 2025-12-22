// Task 2:
// add one example of use strict

// Example 1: 
// way 1 
"use strict";

x = 10;   // Error
console.log(x);

// Way 2

"use strict";

let x = 10;
console.log(x);

// Example 2:
// way 1
function add(a, a) {
  return a + a;
}

console.log(add(5, 10));

// way 2
"use strict";
function add(a, a) {
  return a + a;
}

