//  JS Loops

for (var i = 0; i < 10; i++) {
  console.log('Hello from for ' + i)
}

var j = 0
while (j < 10) {
  console.log('Hello from while ' + j)
  j++
}

var k = 0
do {
  console.log('Hello from Do while ' + k)
  k++
} while (k < 10)

var l = 0
do {
  console.log('Hello from Do while with break ' + l)
  l++
  if (l == 5) break
} while (l < 10)
