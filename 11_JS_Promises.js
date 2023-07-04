// JS Promises

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('foo')
    resolve('foo')
  }, 1000)
})

console.log('Promises Example')

p.then(() => {
  console.log('bar')
})

console.log('Displayed before Foo Bar')
