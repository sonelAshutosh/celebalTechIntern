//  JS Funcitons

function sum(a, b) {
  return a + b
}

console.log('Sum of 10 and 2 using functions', sum(10, 2))

// function with default parameters
function sum(a, b = 0) {
  return a + b
}
console.log('Sum of 10 with default Parameters', sum(10))
console.log('Sum of 10 and 3 with default Parameters', sum(10, 3))

// recursive function
function rec(n) {
  if (n <= 0) return
  console.log(n)
  rec(--n)
}

rec(5)
